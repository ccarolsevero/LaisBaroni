import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { deletePost, getPostBySlug, savePost } from "@/lib/posts";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const { slug } = await context.params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const { slug } = await context.params;
  const existing = await getPostBySlug(slug);
  if (!existing) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.title || typeof body.content !== "string") {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  try {
    const post = await savePost(
      {
        title: String(body.title),
        slug: body.slug ? String(body.slug) : slug,
        date: body.date ? String(body.date) : existing.date,
        excerpt: String(body.excerpt || ""),
        image: body.image ? String(body.image) : undefined,
        category: String(body.category || existing.category),
        published: Boolean(body.published),
        content: String(body.content),
      },
      slug,
    );
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro ao salvar." },
      { status: 400 },
    );
  }
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const { slug } = await context.params;
  const ok = await deletePost(slug);
  if (!ok) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
