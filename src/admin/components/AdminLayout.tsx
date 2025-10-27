import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
