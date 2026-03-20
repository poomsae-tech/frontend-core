import type { LucideIcon } from 'lucide-react';
import type { AppRole } from '@/shared/types/role.types';

export interface RoleCardConfig {
    id: AppRole;
    title: string;
    description: string;
    icon: LucideIcon;
}
