import {
  Home,
  Flag,
  ScrollText,
  Building2,
  BarChart3,
  Calendar,
} from "lucide-react";
import type { NavItem } from "@/features/layout/main-layout";

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { to: "/admin", label: "Главная", icon: <Home size={16} />, end: true },
  { to: "/admin/complaints", label: "Жалобы", icon: <Flag size={16} /> },
  { to: "/admin/logs", label: "Логи", icon: <ScrollText size={16} /> },
  {
    to: "/admin/organizations",
    label: "Организации",
    icon: <Building2 size={16} />,
  },
];

export const USER_NAV_ITEMS: NavItem[] = [
  { to: "/user", label: "Главная", icon: <Home size={16} />, end: true },
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
