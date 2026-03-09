// features/profile/components/change-password-form.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { changePasswordSchema } from "@/shared/schemas/user-profile.schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { ChangePasswordData } from "@/shared/types/user.types";
import { FieldController } from "@/components/field-controller";

export function UserProfileSecurityCard() {
  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ChangePasswordData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Пароль успешно изменен:", data);

      form.reset();
    } catch (error) {
      console.error("Ошибка при изменении пароля", error);
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Смена пароля
        </h3>
        <CardDescription>
          Обновите пароль, чтобы держать аккаунт в безопасности.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <form
          id="user-change-pass-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FieldController
            control={form.control}
            name="currentPassword"
            label="Текущий пароль"
            type="password"
            isLoading={isSubmitting}
          />

          <FieldController
            control={form.control}
            name="newPassword"
            label="Новый пароль"
            type="password"
            isLoading={isSubmitting}
          />

          <FieldController
            control={form.control}
            name="confirmPassword"
            label="Подтвердите пароль"
            type="password"
            isLoading={isSubmitting}
          />
        </form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button
          form="user-change-pass-form"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
          Обновить пароль
        </Button>
      </CardFooter>
    </Card>
  );
}
