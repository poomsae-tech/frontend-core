import { Home, User, BarChart3, Calendar } from "lucide-react";
import type { UserDashboardAction } from "./user-main.types";

export const USER_DASHBOARD_ACTIONS: UserDashboardAction[] = [
    { to: "/user", label: "Главная", icon: <Home size={16} /> },
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
