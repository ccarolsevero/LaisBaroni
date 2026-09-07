import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { persistPublicFile } from "@/lib/post-store";

export const runtime = "nodejs";

const MAX_BYTES = 3.5 * 1024 * 1024;
const TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

function safeBase(name: string) {
  const base = name.replace(/\.[^.]+$/, "").toLowerCase();
  const clean = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return clean || "imagem";
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Escolha uma imagem." }, { status: 400 });
  }

  const ext = TYPES[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Use uma imagem JPG, PNG, WEBP ou GIF." },
      { status: 400 },
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "A imagem deve ter no máximo 3,5 MB." },
      { status: 400 },
    );
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${safeBase(file.name)}.${ext}`;
  const repoPath = `public/uploads/${filename}`;

  try {
    await persistPublicFile(repoPath, bytes, `Adiciona imagem do blog ${filename}`);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Não foi possível enviar a imagem." },
      { status: 400 },
    );
  }

  return NextResponse.json({ url: `/uploads/${filename}` });
}
