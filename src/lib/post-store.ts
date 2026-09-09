import fs from "fs";
import path from "path";

export type StoredPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  category: string;
  published: boolean;
  content: string;
};

const FILE_PATH = path.join(process.cwd(), "content/posts.json");
const GITHUB_PATH = "content/posts.json";
const DEFAULT_REPO = "ccarolsevero/LaisBaroni";
const DEFAULT_BRANCH = "main";

function githubToken() {
  return process.env.BLOG_GITHUB_TOKEN?.trim() || process.env.GITHUB_TOKEN?.trim() || "";
}

function githubRepo() {
  return process.env.BLOG_GITHUB_REPO?.trim() || DEFAULT_REPO;
}

function githubBranch() {
  return process.env.BLOG_GITHUB_BRANCH?.trim() || DEFAULT_BRANCH;
}

function githubHeaders(token?: string) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "lais-baroni-site",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export function serializePosts(posts: StoredPost[]) {
  const payload = [...posts]
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return a.slug.localeCompare(b.slug);
    })
    .map((post) => ({
      title: post.title,
      slug: post.slug,
      date: post.date,
      excerpt: post.excerpt ?? "",
      image: post.image ?? "",
      category: post.category,
      published: Boolean(post.published),
      content: post.content ?? "",
    }));

  return `${JSON.stringify(payload, null, 2)}\n`;
}

export function parsePostsJson(raw: string): StoredPost[] {
  const data = JSON.parse(raw) as unknown;
  if (!Array.isArray(data)) return [];

  return data.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const row = item as Record<string, unknown>;
    const slug = String(row.slug ?? "").trim();
    const title = String(row.title ?? "").trim();
    if (!slug || !title) return [];

    return [
      {
        title,
        slug,
        date: String(row.date ?? "").slice(0, 10),
        excerpt: String(row.excerpt ?? ""),
        image: row.image ? String(row.image) : "",
        category: String(row.category ?? ""),
        published: Boolean(row.published),
        content: String(row.content ?? ""),
      },
    ];
  });
}

export function readLocalPosts(): StoredPost[] | null {
  if (!fs.existsSync(FILE_PATH)) return null;
  try {
    return parsePostsJson(fs.readFileSync(FILE_PATH, "utf8"));
  } catch {
    return null;
  }
}

export async function fetchRemotePosts(): Promise<StoredPost[] | null> {
  const token = githubToken();
  const repo = githubRepo();
  const branch = githubBranch();

  try {
    if (token) {
      const res = await fetch(
        `https://api.github.com/repos/${repo}/contents/${GITHUB_PATH}?ref=${encodeURIComponent(branch)}`,
        { headers: githubHeaders(token), cache: "no-store" },
      );
      if (!res.ok) return null;
      const data = (await res.json()) as { content?: string };
      if (!data.content) return null;
      return parsePostsJson(Buffer.from(data.content, "base64").toString("utf8"));
    }

    const res = await fetch(
      `https://raw.githubusercontent.com/${repo}/${branch}/${GITHUB_PATH}`,
      { cache: "no-store" },
    );
    if (!res.ok) return null;
    return parsePostsJson(await res.text());
  } catch {
    return null;
  }
}

export async function loadStoredPosts(): Promise<StoredPost[]> {
  if (!process.env.VERCEL) {
    return readLocalPosts() ?? [];
  }

  const remote = await fetchRemotePosts();
  if (remote) return remote;
  return readLocalPosts() ?? [];
}

async function githubFileSha(repoPath: string, token: string) {
  const res = await fetch(
    `https://api.github.com/repos/${githubRepo()}/contents/${repoPath}?ref=${encodeURIComponent(githubBranch())}`,
    { headers: githubHeaders(token), cache: "no-store" },
  );
  if (res.status === 404) return undefined;
  if (!res.ok) {
    throw new Error("Não foi possível ler o arquivo no GitHub.");
  }
  const data = (await res.json()) as { sha?: string };
  return data.sha;
}

async function commitGithubFile(repoPath: string, contentBase64: string, message: string) {
  const token = githubToken();
  if (!token) {
    throw new Error("BLOG_GITHUB_TOKEN não configurado.");
  }

  const sha = await githubFileSha(repoPath, token);
  const res = await fetch(
    `https://api.github.com/repos/${githubRepo()}/contents/${repoPath}`,
    {
      method: "PUT",
      headers: {
        ...githubHeaders(token),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: contentBase64,
        branch: githubBranch(),
        ...(sha ? { sha } : {}),
      }),
    },
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      res.status === 401 || res.status === 403
        ? "O token do GitHub não tem permissão para gravar os arquivos."
        : `Não foi possível gravar no GitHub.${detail ? ` ${detail.slice(0, 180)}` : ""}`,
    );
  }
}

export async function persistPublicFile(repoPath: string, bytes: Buffer, message: string) {
  try {
    const localPath = path.join(process.cwd(), repoPath);
    fs.mkdirSync(path.dirname(localPath), { recursive: true });
    fs.writeFileSync(localPath, bytes);
  } catch {
    // No Vercel o disco da função é temporário; o que permanece é o GitHub.
  }

  if (githubToken()) {
    await commitGithubFile(repoPath, bytes.toString("base64"), message);
    return;
  }

  if (process.env.VERCEL) {
    throw new Error("Para a imagem permanecer no ar, configure BLOG_GITHUB_TOKEN.");
  }
}

export async function persistStoredPosts(posts: StoredPost[]) {
  const json = serializePosts(posts);

  try {
    fs.mkdirSync(path.dirname(FILE_PATH), { recursive: true });
    fs.writeFileSync(FILE_PATH, json);
  } catch {
    // No Vercel o disco da função é temporário; o que permanece é o GitHub.
  }

  if (githubToken()) {
    await commitGithubFile(
      GITHUB_PATH,
      Buffer.from(json).toString("base64"),
      "Atualiza artigos do blog",
    );
    return;
  }

  if (process.env.VERCEL) {
    throw new Error(
      "Para os artigos permanecerem no ar, o JSON precisa ser gravado no GitHub. Configure BLOG_GITHUB_TOKEN.",
    );
  }
}
