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
  UserMainPage,
  UserProfilePage,
  UserStatisticPage,
  UserUpcomingStartsPage,
  // LogsPage,
} from "@/pages/index";
import { RouteErrorBoundary } from "@/components/error-boundary";
import type { NavItem } from "@/features/layout/main-layout";
import { MainLayout } from "@/features/layout/main-layout";

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

function MainScreen() {
  const navigate = useNavigate();

  return (
    <MainLayout
      navItems={userNavItems}
      onLogout={() => {
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
  },
  // ADMIN ROUTES
  {
    element: <MainScreen />,
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
    element: <MainScreen />,
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
