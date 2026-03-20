import type { RoleCardConfig } from "@/features/auth/role-select/role-select.types";
import { Flag, Shield, Swords } from "lucide-react";

export const MOCK_ROLE_CONFIGS: RoleCardConfig[] = [
  {
    id: "FIGHTER",
    title: "Боец",
    description: "Участвуйте в соревнованиях и отслеживайте свои результаты.",
    icon: Swords,
  },
  {
    id: "REFEREE",
    title: "Судья",
    description: "Оценивайте выступления и управляйте ходом соревнований.",
    icon: Flag,
  },
  {
    id: "ADMIN",
    title: "Администратор",
    description: "Управляйте системой, пользователями и организациями.",
    icon: Shield,
  },
];