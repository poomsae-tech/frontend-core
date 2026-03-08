import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader, ShieldCheck } from "lucide-react";
import {
  FieldController,
  type FormInputFieldType,
} from "@/components/field-controller";
import type { UserProfileData } from "@/shared/types/user.types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileSchema } from "@/shared/schemas/user-profile.schema";
import { useState } from "react";

const PERSONAL_FIELDS: FormInputFieldType<UserProfileData>[] = [
  { name: "fullName", label: "Полное имя" },
  { name: "club", label: "Клуб" },
  { name: "trainer", label: "Тренер" },
  { name: "birthDate", label: "Дата рождения" },
] as const;

const FIGHTER_FIELDS: FormInputFieldType<UserProfileData>[] = [
  { name: "weight", label: "Вес (кг)", type: "number" },
  { name: "belt", label: "Пояс", type: "text" },
  { name: "rank", label: "Разряд", type: "text" },
] as const;

interface ProfileFormProps {
  initialData: UserProfileData;
}

export function UserProfileFormCard({ initialData }: ProfileFormProps) {
  /** FORM DATA **/
  const formData = useForm<UserProfileData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  /** EDIT MODE **/
  const [isEditing, setIsEditing] = useState(false);
  const toggleIsEditing = (mode: boolean) => setIsEditing(mode);

  /** SUBMITTING **/
  const onSubmit = async (data: UserProfileData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Данные успешно сохранены:", data);

      formData.reset(data);
      setIsEditing(false);
    } catch (error) {
      console.error("Ошибка при сохранении профиля", error);
    }
  };

  const handleCancel = () => {
    formData.reset(initialData);
    toggleIsEditing(false);
  };

  return (
    <Card>
      <CardContent>
        <form
          id="user-profile-form"
          onSubmit={formData.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <section>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Личные данные
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {PERSONAL_FIELDS.map(({ name, label }) => (
                <FieldController
                  key={name + label}
                  control={formData.control}
                  name={name}
                  label={label}
                  isDisabled={!isEditing}
                  isLoading={formData.formState.isSubmitting}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Данные бойца
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {FIGHTER_FIELDS.map(({ name, label, type }) => (
                <FieldController
                  key={name + label}
                  control={formData.control}
                  name={name}
                  label={label}
                  type={type}
                  isDisabled={!isEditing}
                  isLoading={formData.formState.isSubmitting}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Документы
            </h3>
            <FieldGroup>
              <Field className="gap-1">
                <FieldLabel className="ml-1">Страховка</FieldLabel>
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-4 gap-1 justify-between text-green-600 border-green-500/30 bg-green-500/5"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} />
                    Активна
                  </div>
                  <span>До 26.12.2026</span>
                </Badge>
              </Field>
            </FieldGroup>
          </section>

          <div className="flex gap-2 justify-end">
            {!isEditing && (
              <Button
                size={"lg"}
                type={"button"}
                variant={"secondary"}
                disabled={formData.formState.isSubmitting}
                onClick={() => toggleIsEditing(true)}
              >
                Редактировать
              </Button>
            )}
            {isEditing && (
              <>
                <Button
                  size={"lg"}
                  type="submit"
                  disabled={
                    formData.formState.isSubmitting ||
                    !formData.formState.isDirty
                  }
                >
                  {formData.formState.isSubmitting && (
                    <Loader className="animate-spin" />
                  )}
                  Сохранить
                </Button>

                <Button
                  size={"lg"}
                  variant={"destructive"}
                  type={"button"}
                  disabled={formData.formState.isSubmitting}
                  onClick={handleCancel}
                >
                  {formData.formState.isSubmitting && (
                    <Loader className="animate-spin" />
                  )}
                  Отмена
                </Button>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
