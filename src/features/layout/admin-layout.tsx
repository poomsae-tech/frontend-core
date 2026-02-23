import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useAuthStore } from "@/features/auth/auth.store";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { getNameInitials } from "@/lib/get-name-initials";
import { Button } from "@/components/ui/button";

export interface NavItem {
  to: string;
  label: string;
  icon?: ReactNode;
  end?: boolean;
}

interface AdminLayoutProps {
  navItems?: NavItem[];
  onLogout?: () => void;
}

export function AdminLayout({ navItems = [], onLogout }: AdminLayoutProps) {
  const admin = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background">
        <div className="container flex items-center mx-auto px-4 h-14">
          <nav className=" flex items-center gap-6 ">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )
                }
              >
                {item.icon && (
                  <span className="h-4 w-4 shrink-0">{item.icon}</span>
                )}
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto gap-3 flex items-center">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={admin?.profile?.avatar}
                  alt={admin?.username + "_avatar"}
                />
                <AvatarFallback>
                  {admin?.profile?.fullname
                    ? getNameInitials(admin.profile.fullname)
                    : "N/A"}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">
                {admin?.profile?.fullname ?? "N/A"}
              </span>
            </div>

            <Button onClick={onLogout} variant={"ghost"}>
              Выход
              <ArrowRight />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Poomsae Tech
        </div>
      </footer>
    </div>
  );
}
