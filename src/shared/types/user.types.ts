import type { changePasswordSchema, userProfileSchema } from "../schemas/user-profile.schema";
import { z } from "zod";

export type UserProfileData = z.infer<typeof userProfileSchema>;
export type ChangePasswordData = z.infer<typeof changePasswordSchema>;