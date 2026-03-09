import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteErrorBoundary } from "@/components/error-boundary";
import { MainLayout } from "@/features/layout/main-layout";
import { ADMIN_NAV_ITEMS, USER_NAV_ITEMS } from "./nav-config";

// Admin Features
import { DashboardPage } from "@/features/admin/dashboard/dashboard-page";
import { ComplaintsPage } from "@/features/admin/complaints/complaints-page";

// User Features
import { UserMainPage } from "@/features/user/main/user-main-page";
import { UserProfilePage } from "@/features/user/profile/user-profile-page";
import { UserStatisticPage } from "@/features/user/statistic/user-statistic-page";
import { UserUpcomingStartsPage } from "@/features/user/upcoming-starts/user-upcoming-starts-page";

// Shared/Auth Features
import { LoginPage } from "@/features/auth/login-page";
import { NotFoundPage } from "@/features/layout/not-found-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin",
    element: <MainLayout navItems={ADMIN_NAV_ITEMS} />,
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
        path: "organizations",
        element: <div>Организации (В разработке)</div>,
      },
      {
        path: "logs",
        element: <div>Логи (В разработке)</div>,
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
