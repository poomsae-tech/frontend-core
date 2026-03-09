"use client";

import { MOCK_USER_DATA } from "@/shared/mocks/user.mock";

import { ProfileHeader } from "./profile-header";
import { ProfileTabs } from "./profile-tabs";
import { UserProfileFormCard } from "./profile-form-card";
import { UserProfileSecurityCard } from "./profile-security-card";
import { UserProfileNotificationsCard } from "./profile-notifications-card";

export function UserProfilePage() {
  const user = MOCK_USER_DATA;

  return (
    <div className="container max-w-2xl mx-auto pt-6 pb-20 px-4 animate-in fade-in slide-in-from-top-2 duration-400 flex flex-col gap-4">
      <ProfileHeader user={user} />
      <ProfileTabs
        profileContent={<UserProfileFormCard initialData={user} />}
        securityContent={<UserProfileSecurityCard />}
        notificationsContent={<UserProfileNotificationsCard />}
      />
    </div>
  );
}
