import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getNameInitials } from "@/lib/get-name-initials";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export interface NavItem {
  to: string;
  label: string;
  icon?: ReactNode;
  end?: boolean;
}

interface MainLayoutProps {
  navItems?: NavItem[];
}

export function MainLayout({ navItems = [] }: MainLayoutProps) {
  const userName = "Иван Иванов"; // Mock for now until API integration

  const navigate = useNavigate();
  const { setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background/50">
      <header className="border-b bg-background sticky top-0 z-50 backdrop-blur-sm">
        <div className="container flex items-center mx-auto px-4 h-16">
          <nav className="flex items-center gap-4 md:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 text-sm font-semibold transition-all px-3 py-2 rounded-xl hover:bg-muted",
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground",
                  )
                }
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Avatar className="size-7 ring-1 ring-border">
              <AvatarImage />
              <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                {getNameInitials(userName)}
              </AvatarFallback>
            </Avatar>
            <Button
              variant={"ghost"}
              className="hidden md:flex items-center rounded-xl font-bold tracking-tight py-2 cursor-pointer gap-3 "
              onClick={() => navigate("/user/profile")}
              size={"lg"}
            >
              {userName}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Светлая
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Темная
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  Системная
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size={"icon-lg"}
              className="rounded-xl gap-2 cursor-pointer text-muted-foreground hover:text-destructive hover:bg-destructive/5 shrink-0"
            >
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 grid container mx-auto px-4 py-6">
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
