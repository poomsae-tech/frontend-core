import type { RoleCardConfig } from "@/features/auth/role-select/role-select.types";
import { Shield, Users, Building2, GraduationCap, Trophy, Gamepad2 } from "lucide-react";

export const MOCK_ROLE_CONFIGS: RoleCardConfig[] = [
  {
    id: "54fd34-fdsf34-super-admin",
    title: "Администратор платформы",
    description: "Технический контроль, управление глобальными настройками и блокировка организаций.",
    icon: Shield,
  },
  {
    id: "a2b3c4-d5e6f7-federation-rep",
    title: "Представитель Федерации",
    description: "Региональный куратор. Проводит аккредитацию клубов и назначает главных судей турниров.",
    icon: Users,
  },
  {
    id: "c3d4e5-f6g7h8-org-admin",
    title: "Администратор организации",
    description: "Управляет штатом тренеров и базой спортсменов своей организации.",
    icon: Building2,
  },
  {
    id: "e4f5g6-h7i8j9-coach",
    title: "Тренер",
    description: "Основной оператор данных. Создает профили спортсменов, следит за их актуальностью и подает заявки на турниры.",
    icon: GraduationCap,
  },
  {
    id: "g6h7i8-j9k0l1-athlete",
    title: "Спортсмен",
    description: "Пользователь с правами «только чтение». Видит свой рейтинг, историю поединков и статус страховки. Самостоятельная регистрация на турниры запрещена.",
    icon: Trophy,
  },
  {
    id: "i8j9k0-l1m2n3-referee",
    title: "Судья",
    description: "Временная операционная роль, привязанная к конкретному турниру для управления счетом через мобильный пульт.",
    icon: Gamepad2,
  },
];
