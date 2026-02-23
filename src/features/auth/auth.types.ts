export type Role = "admin" | "user";

export type BaseUser = {
  id: number;
  username: string;
  role: Role;
  password: string;
  email?: string;
};

export type UserProfile = {
  user_id: number;
  fullname: string;
  avatar?: string;
  gender?: string;
  birth?: string;
  weight?: string;
  belt?: string;
  rank?: string;
  club?: string;
  trainer?: string;
};
