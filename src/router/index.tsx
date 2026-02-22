import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/navbar-layout";
import type { NavItem } from "@/components/navbar-layout";
import { Home, Flag, ScrollText, Building2 } from "lucide-react";
import {
  DashboardPage,
  LoginPage,
  NotFoundPage,
  ComplaintsPage,
  LogsPage,
} from "@/pages/index";
import { RouteErrorBoundary } from "@/components/error-boundary";

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

const router = createBrowserRouter([
  {
    path: "admin/login",
    element: <LoginPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    element: <Layout navItems={adminNavItems} />,
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
      {
        path: "logs",
        element: <LogsPage />,
      },
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
