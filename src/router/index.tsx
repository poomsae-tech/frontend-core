import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
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
  // LogsPage,
} from "@/pages/index";
import { RouteErrorBoundary } from "@/components/error-boundary";
import { useAuthStore } from "@/features/auth/auth.store";
import { AdminLayout, type NavItem } from "@/features/layout/admin-layout";
import { UserLayout } from "@/features/layout/user-layout";
import { UserMainPage } from "@/features/user/main/user-mane-page";
import * as authMiddleware from "@/features/auth/auth.middleware";

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
const userNavItems: NavItem[] = [
  { to: "/", label: "Главная", icon: <Home size={16} />, end: true },
  { to: "/profile", label: "Профиль", icon: <User size={16} /> },
  { to: "/statistics", label: "Статистика", icon: <BarChart3 size={16} /> },
  {
    to: "/upcoming-events",
    label: "Ближайшие старты",
    icon: <Calendar size={16} />,
  },
];

function AdminScreen() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <AdminLayout
      navItems={adminNavItems}
      onLogout={() => {
        logout();
        navigate("/login");
      }}
    />
  );
}
function UserScreen() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <UserLayout
      navItems={userNavItems}
      onLogout={() => {
        logout();
        navigate("/login");
      }}
    />
  );
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <RouteErrorBoundary />,
    middleware: [authMiddleware.loginMiddleware],
  },
  // ADMIN ROUTES
  {
    element: <AdminScreen />,
    path: "admin",
    errorElement: <RouteErrorBoundary />,
    middleware: [authMiddleware.adminMiddleware],
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
    element: <UserScreen />,
    path: "/",
    errorElement: <RouteErrorBoundary />,
    middleware: [authMiddleware.userMiddleware],
    children: [
      {
        index: true,
        element: <UserMainPage />,
      },
      // { path: "profile", element: <UserProfilePage /> },
      // { path: "statistics", element: <UserStatisticsPage /> },
      // { path: "upcoming-events", element: <UserUpcomingEventsPage /> },
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
