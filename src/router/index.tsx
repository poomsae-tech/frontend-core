import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Flag,
  ScrollText,
  Building2,
  User,
  BarChart3,
  Calendar,
} from "lucide-react";
import {
  DashboardPage,
  LoginPage,
  NotFoundPage,
  ComplaintsPage,
  UserMainPage,
  UserProfilePage,
  UserStatisticPage,
  UserUpcomingStartsPage,
  // LogsPage,
} from "@/pages/index";
import { RouteErrorBoundary } from "@/components/error-boundary";
import type { NavItem } from "@/features/layout/main-layout";
import { MainLayout } from "@/features/layout/main-layout";
import type { UserRole } from "@/shared/types/user.types";

const adminNavItems: NavItem[] = [
  { to: "/admin", label: "Главная", icon: <Home size={16} />, end: true },
  { to: "/admin/complaints", label: "Жалобы", icon: <Flag size={16} /> },
  { to: "/admin/logs", label: "Логи", icon: <ScrollText size={16} /> },
  {
    to: "/admin/organizations",
    label: "Организации",
    icon: <Building2 size={16} />,
  },
];

export const userNavItems: NavItem[] = [
  { to: "/user", label: "Главная", icon: <Home size={16} />, end: true },
  { to: "/user/profile", label: "Профиль", icon: <User size={16} /> },
  {
    to: "/user/statistics",
    label: "Статистика",
    icon: <BarChart3 size={16} />,
  },
  {
    to: "/user/upcoming-starts",
    label: "Ближайшие старты",
    icon: <Calendar size={16} />,
  },
];

const NAV_ITEMS_BY_ROLE_MAP: Record<UserRole, NavItem[]> = {
  admin: adminNavItems,
  default: userNavItems,
};

const currentRole: UserRole = "default";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <RouteErrorBoundary />,
  },
  // ADMIN ROUTES
  {
    element: <MainLayout navItems={NAV_ITEMS_BY_ROLE_MAP[currentRole]} />,
    path: "admin",
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "complaints",
        element: <ComplaintsPage />,
      },
      // {
      //   path: "logs",
      //   element: <LogsPage />,
      // },
    ],
  },
  // USER ROUTES
  {
    element: <MainLayout navItems={NAV_ITEMS_BY_ROLE_MAP[currentRole]} />,
    path: "/user",
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <UserMainPage />,
      },
      { path: "profile", element: <UserProfilePage /> },
      { path: "statistics", element: <UserStatisticPage /> },
      { path: "upcoming-starts", element: <UserUpcomingStartsPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
