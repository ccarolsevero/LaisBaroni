import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllPosts, savePost } from "@/lib/posts";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const posts = await getAllPosts({ includeDrafts: true });
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.title || typeof body.content !== "string") {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  try {
    const post = await savePost({
      title: String(body.title),
      slug: body.slug ? String(body.slug) : undefined,
      date: body.date ? String(body.date) : undefined,
      excerpt: String(body.excerpt || ""),
      image: body.image ? String(body.image) : undefined,
      category: String(body.category || ""),
      published: Boolean(body.published),
      content: String(body.content),
    });
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro ao salvar." },
      { status: 400 },
    );
  }
}
