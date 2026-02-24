import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileField } from "./profile-field";
import { InsuranceIndicatorCard } from "./insurance-indicator-card";

export function UserProfilePage() {
  return (
    <Card className="gap-16">
      <CardHeader className="pb-10 pt-12">
        <CardTitle className="mx-auto text-4xl font-semibold uppercase tracking-wide text-foreground">
          Профиль
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-16 max-w-xl w-full mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          <ProfileField label="Дата рождения" value="14.12.2003" />
          <ProfileField
            className={"md:*:text-end md:*:justify-end"}
            label="Вес"
            value="74"
          />

          <ProfileField label="Пояс" value="Красный" />
          <ProfileField
            className={"md:*:text-end md:*:justify-end"}
            label="Разряд"
            value="КМС"
          />
        </div>

        <InsuranceIndicatorCard status="warning" />
      </CardContent>
    </Card>
  );
}
