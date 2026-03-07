import type { ReactNode } from "react";

export type { UserProfileData } from "@/shared/types/user.types";

export interface UserDashboardAction {
    label: string;
    to: string;
    icon: ReactNode;
}
