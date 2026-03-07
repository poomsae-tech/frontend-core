export type UserRole = "default" | "admin";

export interface UserProfileData {
    fullName: string;
    club: string;
    trainer: string;
    birthDate: string;
    weight: string;
    belt: string;
    rank: string;
    avatarUrl?: string;
}
