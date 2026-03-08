import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface NotificationState {
  emailNotifications: boolean;
  marketingEmails: boolean;
  securityAlerts: boolean;
}

export function UserProfileNotificationsCard() {
  const [preferences, setPreferences] = useState<NotificationState>({
    emailNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
  });

  const handleToggle = (key: keyof NotificationState) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Card className="w-full max-w-2xl shadow-sm">
      <CardHeader>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Настройки уведомлений
        </h3>
        <CardDescription>
          Выберите, какие уведомления вы хотите получать
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col divide-y divide-border">
          <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1">
              <Label className="text-sm font-medium leading-none">
                Уведомления по email
              </Label>
              <span className="text-sm text-muted-foreground">
                Получать письма об активности аккаунта
              </span>
            </div>
            <Switch
              checked={preferences.emailNotifications}
              onCheckedChange={() => handleToggle("emailNotifications")}
            />
          </div>

          <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1">
              <Label className="text-sm font-medium leading-none">
                Маркетинговые рассылки
              </Label>
              <span className="text-sm text-muted-foreground">
                Получать письма о новых функциях и обновлениях
              </span>
            </div>
            <Switch
              checked={preferences.marketingEmails}
              onCheckedChange={() => handleToggle("marketingEmails")}
            />
          </div>

          <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1">
              <Label className="text-sm font-medium leading-none">
                Оповещения о безопасности
              </Label>
              <span className="text-sm text-muted-foreground">
                Получать уведомления о событиях, связанных с безопасностью
              </span>
            </div>
            <Switch
              checked={preferences.securityAlerts}
              onCheckedChange={() => handleToggle("securityAlerts")}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
