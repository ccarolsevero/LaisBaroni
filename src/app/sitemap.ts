import type { MetadataRoute } from "next";
import { categories } from "@/lib/blog";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://laisbarone.com.br";
  const posts = await getAllPosts();
  const routes = [
    "",
    "/avaliacao-neuropsicologica",
    "/avaliacao-neuropsicologica/infantil",
    "/avaliacao-neuropsicologica/adultos",
    "/avaliacao-neuropsicologica/idosos",
    "/avaliacao-neuropsicologica/tdah",
    "/avaliacao-neuropsicologica/autismo",
    "/psicoterapia",
    "/psicoterapia/autoconhecimento",
    "/psicoterapia/ansiedade",
    "/psicoterapia/relacionamentos",
    "/psicoterapia/infantil",
    "/supervisao-clinica",
    "/sobre",
    "/blog",
    "/contato",
    ...categories.map((category) => `/blog/categoria/${category.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
