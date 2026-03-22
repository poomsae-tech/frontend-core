import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteErrorBoundary } from "@/components/error-boundary";
import { MainLayout } from "@/features/layout/main-layout";
import {
  ADMIN_NAV_ITEMS,
  FEDERATION_NAV_ITEMS,
  USER_NAV_ITEMS,
} from "./nav-config";

// Admin Features
import { DashboardPage as AdminDashboardPage } from "@/features/admin/dashboard/dashboard-page";
import { ComplaintsPage } from "@/features/admin/complaints/complaints-page";
import { LogsPage } from "@/features/admin/admin-logs/logs-page";

// Federation Features
import { DashboardPage as FederationDashboardPage } from "@/features/federation/dashboard/dashboard-page";

// User Features
import { UserMainPage } from "@/features/user/main/user-main-page";
import { UserProfilePage } from "@/features/user/profile/user-profile-page";
import { UserStatisticPage } from "@/features/user/statistic/user-statistic-page";
import { UserUpcomingStartsPage } from "@/features/user/upcoming-starts/user-upcoming-starts-page";

// Shared/Auth Features
import { LoginPage } from "@/features/auth/login-page";
import { RoleSelectPage } from "@/features/auth/role-select/role-select-page";
import { NotFoundPage } from "@/features/layout/not-found-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/role-select",
    element: <RoleSelectPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin",
    element: <MainLayout navItems={ADMIN_NAV_ITEMS} />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: "complaints",
        element: <ComplaintsPage />,
      },
      {
        path: "organizations",
        element: <div>Организации (В разработке)</div>,
      },
      {
        path: "logs",
        element: <LogsPage />,
      },
    ],
  },
  {
    path: "/federation",
    element: <MainLayout navItems={FEDERATION_NAV_ITEMS} />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <FederationDashboardPage />,
      },
      {
        path: "applications",
        element: <div>Заявки (В разработке)</div>,
      },
      {
        path: "tournaments",
        element: <div>Турниры (В разработке)</div>,
      },
      {
        path: "calendar",
        element: <div>Календарь (В разработке)</div>,
      },
    ],
  },

  {
    path: "/user",
    element: <MainLayout navItems={USER_NAV_ITEMS} />,
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
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
