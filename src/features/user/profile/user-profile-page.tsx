import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/features/auth/auth.store";
import { ProfileField } from "./profile-field";
import { InsuranceIndicatorCard } from "./insurance-indicator-card";

export function UserProfilePage() {
  const user = useAuthStore((s) => s.user);

  return (
    <Card className="gap-16">
      <CardHeader className="pb-10 pt-12">
        <CardTitle className="mx-auto text-4xl font-semibold uppercase tracking-wide text-foreground">
          Профиль
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-16 max-w-xl w-full mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          <ProfileField
            label="Дата рождения"
            value={user?.profile?.birth ?? "N/A"}
          />
          <ProfileField
            className={"md:*:text-end md:*:justify-end"}
            label="Вес"
            value={user?.profile?.weight ?? "N/A"}
          />

          <ProfileField label="Пояс" value={user?.profile?.belt ?? "N/A"} />
          <ProfileField
            className={"md:*:text-end md:*:justify-end"}
            label="Разряд"
            value={user?.profile?.rank ?? "N/A"}
          />
        </div>

        <InsuranceIndicatorCard status="warning" />
      </CardContent>
    </Card>
  );
}
