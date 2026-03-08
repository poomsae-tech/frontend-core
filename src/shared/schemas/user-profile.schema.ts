import { z } from "zod";

export const userProfileSchema = z.object({
    fullName: z.string().min(2, "ФИО должно содержать минимум 2 символа"),
    club: z.string().min(2, "Укажите название клуба"),
    trainer: z.string().min(2, "Укажите имя тренера"),

    birthDate: z
        .string()
        .regex(/^\d{2}.\d{2}.\d{4}$/, "Формат даты должен быть ДД.ММ.ГГГГ"),

    weight: z.string().min(1, "Укажите вес"),

    belt: z.string().min(1, "Укажите пояс"),
    rank: z.string().min(1, "Укажите разряд/степень"),

    avatarUrl: z
        .url("Неверный формат ссылки на аватар")
        .optional()
        .or(z.literal("")),
});

export const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, "Введите текущий пароль"),
        newPassword: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
        confirmPassword: z.string().min(1, "Подтвердите новый пароль"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
    });