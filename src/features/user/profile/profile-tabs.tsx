import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, LockKeyhole, User } from "lucide-react";
import type { ReactNode } from "react";

type ProfileTabType = "profile" | "security" | "notifications";

interface ProfileTabsProps {
  defaultTab?: ProfileTabType;
  profileContent: ReactNode;
  securityContent: ReactNode;
  notificationsContent: ReactNode;
}

const TABS_CONFIG = [
  { value: "profile", label: "Аккаунт", icon: User },
  { value: "security", label: "Безопасность", icon: LockKeyhole },
  { value: "notifications", label: "Уведомления", icon: Bell },
] as const;

export function ProfileTabs({
  profileContent,
  securityContent,
  notificationsContent,
  defaultTab = "profile",
}: ProfileTabsProps) {
  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList className="w-full justify-start">
        {TABS_CONFIG.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex-1 cursor-pointer"
          >
            <Icon className="size-4" />
            <span className="hidden sm:inline">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="profile" className="mt-6 flex flex-col gap-6">
        {profileContent}
      </TabsContent>

      <TabsContent value="security" className="mt-6">
        {securityContent}
      </TabsContent>

      <TabsContent value="notifications" className="mt-6">
        {notificationsContent}
      </TabsContent>
    </Tabs>
  );
}
