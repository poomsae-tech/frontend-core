import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface NavItem {
  to: string;
  label: string;
  icon?: ReactNode;
  end?: boolean;
}

interface LayoutProps {
  navItems?: NavItem[];
}

export function Layout({ navItems = [] }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background">
        <nav className="container mx-auto px-4 h-14 flex items-center gap-6">
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
