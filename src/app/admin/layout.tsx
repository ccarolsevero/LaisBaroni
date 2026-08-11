import type { Metadata } from "next";
import { AdminNav } from "@/components/admin-nav";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mist">
      <AdminNav />
      {children}
    </div>
  );
}
