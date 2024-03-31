"use client";
import {
  DashboardNav,
  NavItem,
} from "@/components/ui/dashboard-nav/dashboard-nav";
import MobileSidebar from "@/components/ui/dashboard-nav/mobile-nav";
import { cn } from "@/lib/utils";
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Employee",
    href: "/dashboard/employee",
    icon: "employee",
    label: "employee",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/dashboard/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];

function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileSidebar />
      <div className="flex h-screen overflow-hidden">
        <nav
          className={cn(
            `relative hidden h-screen border-r pt-16 lg:block w-72`
          )}
        >
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                  Overview
                </h2>
                <DashboardNav items={navItems} />
              </div>
            </div>
          </div>
        </nav>
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}

export default LayoutDashboard;
