import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let sql: NeonQueryFunction<false, false> | null = null;

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL?.trim());
}

export function getSql() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) {
    throw new Error(
      "DATABASE_URL não configurada. Defina a connection string do Neon em .env.local.",
    );
  }
  if (!sql) {
    sql = neon(url);
  }
  return sql;
}
