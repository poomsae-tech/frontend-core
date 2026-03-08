import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/lib/get-name-initials";
import type { UserProfileData } from "@/shared/types/user.types";

interface ProfileHeaderProps {
  user: UserProfileData;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const initials = getNameInitials(user.fullName);
  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-14 ring-2 ring-border">
        <AvatarImage
          className="size-full object-cover"
          src={user.avatarUrl}
          alt={user.fullName}
        />
        <AvatarFallback className="text-lg bg-linear-to-br from-pink-400 to-purple-500 text-white">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Настройки профиля</h1>
        <p className="text-muted-foreground">
          Управляйте настройками аккаунта и предпочтениями
        </p>
      </div>
    </div>
  );
}
