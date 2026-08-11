import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
  redirect("/admin/blog");
}
