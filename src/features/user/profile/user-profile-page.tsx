"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MOCK_USER_DATA } from "@/shared/mocks/user.mock";
import {
  Image as ImageIcon,
  Pencil,
  Check,
  X,
  ShieldCheck,
} from "lucide-react";

export function UserProfilePage() {
  const user = MOCK_USER_DATA;
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullName: user.fullName,
    club: user.club,
    trainer: user.trainer,
    weight: user.weight,
    belt: user.belt,
    rank: user.rank,
    birthDate: user.birthDate,
  });
  const [saved, setSaved] = useState({ ...form });

  function handleChange(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    setSaved({ ...form });
    setIsEditing(false);
  }

  function handleCancel() {
    setForm({ ...saved });
    setIsEditing(false);
  }

  const inputClass = isEditing
    ? "bg-background border-border focus:border-primary transition-colors rounded-xl h-11"
    : "bg-transparent border-transparent text-foreground font-medium focus:border-primary transition-colors rounded-xl h-11 cursor-default select-text";

  return (
    <div className="container max-w-2xl mx-auto pt-6 pb-20 px-4 animate-in fade-in slide-in-from-top-2 duration-400">
      <Card className="border shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:p-10 space-y-8">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            {/* Avatar + Name */}
            <div className="flex items-center gap-5">
              <div className="relative size-20 rounded-full overflow-hidden bg-muted flex items-center justify-center border-4 border-background shadow-md shrink-0">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={form.fullName}
                    className="size-full object-cover"
                  />
                ) : (
                  <ImageIcon size={28} className="text-muted-foreground/30" />
                )}
              </div>
              <div className="space-y-1">
                <h1 className="text-xl font-bold tracking-tight leading-tight">
                  {saved.fullName}
                </h1>
                <p className="text-sm text-muted-foreground">{saved.club}</p>
                <div className="flex items-center gap-2 pt-0.5">
                  <Badge
                    variant="secondary"
                    className="text-[10px] uppercase tracking-wider font-bold"
                  >
                    {saved.rank}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-[10px] gap-1 text-green-600 border-green-500/30 bg-green-500/5"
                  >
                    <ShieldCheck size={10} />
                    Страховка
                  </Badge>
                </div>
              </div>
            </div>

            {!isEditing && (
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-4 rounded-xl gap-1.5 text-xs font-bold border-muted/50 shrink-0"
                onClick={() => setIsEditing(true)}
              >
                <Pencil size={13} />
                Редактировать
              </Button>
            )}
          </div>

          <Separator />

          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                Личные данные
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                <Field
                  label="Полное имя"
                  value={form.fullName}
                  editing={isEditing}
                  onChange={(v) => handleChange("fullName", v)}
                  inputClass={inputClass}
                />
                <Field
                  label="Клуб"
                  value={form.club}
                  editing={isEditing}
                  onChange={(v) => handleChange("club", v)}
                  inputClass={inputClass}
                />
                <Field
                  label="Тренер"
                  value={form.trainer}
                  editing={isEditing}
                  onChange={(v) => handleChange("trainer", v)}
                  inputClass={inputClass}
                />
                <Field
                  label="Дата рождения"
                  value={form.birthDate}
                  editing={isEditing}
                  onChange={(v) => handleChange("birthDate", v)}
                  inputClass={inputClass}
                />
              </div>
            </div>

            <Separator className="opacity-50" />

            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                Данные бойца
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                <Field
                  label="Вес (кг)"
                  value={form.weight}
                  editing={isEditing}
                  onChange={(v) => handleChange("weight", v)}
                  inputClass={inputClass}
                />
                <Field
                  label="Пояс"
                  value={form.belt}
                  editing={isEditing}
                  onChange={(v) => handleChange("belt", v)}
                  inputClass={inputClass}
                />
                <Field
                  label="Разряд"
                  value={form.rank}
                  editing={isEditing}
                  onChange={(v) => handleChange("rank", v)}
                  inputClass={inputClass}
                />
              </div>
            </div>

            <Separator className="opacity-50" />

            <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                Документы
              </p>
              <div className="grid grid-cols-1 gap-y-5">
                <div className="space-y-2">
                  <Label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Страховка
                  </Label>
                  <Input
                    value="Активна до 20.12.2026"
                    readOnly
                    className="bg-green-500/5 text-green-600 border-green-500/15 font-semibold rounded-xl h-11 cursor-default"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {isEditing && (
          <CardFooter className="bg-muted/20 border-t px-8 py-4 flex justify-end gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <Button
              variant="ghost"
              className="h-10 px-5 rounded-xl font-semibold text-sm gap-1.5"
              onClick={handleCancel}
            >
              <X size={14} />
              Отмена
            </Button>
            <Button
              className="h-10 px-6 rounded-xl font-bold text-sm gap-1.5 shadow-md shadow-primary/20 active:scale-95 transition-transform"
              onClick={handleSave}
            >
              <Check size={14} />
              Сохранить
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

function Field({
  label,
  value,
  editing,
  onChange,
  inputClass,
}: {
  label: string;
  value: string;
  editing: boolean;
  onChange: (v: string) => void;
  inputClass: string;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </Label>
      <Input
        value={value}
        readOnly={!editing}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}
