import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import type { BaseUser, UserProfile } from "./auth.types";

const USERS: BaseUser[] = [
  {
    id: 0,
    username: "user",
    password: "password123",
    role: "user",
    email: "sportsman@example.com",
  },
];

const ADMINS: BaseUser[] = [
  {
    id: 1,
    username: "admin",
    password: "password123",
    role: "admin",
    email: "admin@example.com",
  },
];

const ALL_USERS: BaseUser[] = [...USERS, ...ADMINS];

const USER_PROFILES: UserProfile[] = [
  {
    user_id: 0,
    fullname: "John Doe",
    avatar:
      "https://preview.redd.it/an-alternative-taekwondo-outift-for-hwoarang-art-is-by-me-v0-a9i0gqpowvka1.jpg?width=640&crop=smart&auto=webp&s=4916c773574c29ca017a988052514e58fcf5d1be",
    gender: "male",
    birth: "1995-05-15",
    weight: "75",
    belt: "black",
    rank: "1 Dan",
    club: "Elite Taekwondo",
    trainer: "Master Lee",
  },
  {
    user_id: 1,
    fullname: "Jane Smith",
    avatar:
      "https://media.istockphoto.com/id/2192030975/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82%D0%B0-%D1%83%D0%B4%D0%B0%D1%80%D0%B0-%D0%BD%D0%BE%D0%B3%D0%BE%D0%B9-%D0%B2-%D0%B1%D0%BE%D0%B5%D0%B2%D1%8B%D1%85-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B0%D1%85.jpg?s=612x612&w=0&k=20&c=GssDR4_Lg5MDRDUqvA_FtNxaMDgD8dc4UpnvB-GPbUg=",
    gender: "female",
  },
];

const findUser = (username: string) =>
  ALL_USERS.find((u) => u.username === username);

const findProfile = (userId: BaseUser["id"]) =>
  USER_PROFILES.find((p) => p.user_id === userId);

export type LoginPayload = {
  username: string;
  password: string;
};

interface AuthStoreState {
  user: (BaseUser & { profile?: UserProfile }) | null;
  isAuth: boolean;
  error: unknown;
}

interface AuthStoreActions {
  login: (payload: LoginPayload) => void;
  logout: () => void;
  checkAuth: () => void;
}

type AuthStore = AuthStoreState & AuthStoreActions;

const _notFoundUserError = "User not found";
const _invalidPasswordError = "Invalid pasword";
const AUTH_STORAGE_KEY = "auth_session_username";

export const useAuthStore = create<AuthStore>()(
  devtools(
    immer((set) => ({
      user: null,
      isAuth: false,
      error: null,

      login: (payload: LoginPayload) => {
        set((state) => {
          state.error = null;
        });

        try {
          const existingUser = findUser(payload.username);

          if (!existingUser) throw new Error(_notFoundUserError);

          const isPassValid = existingUser.password === payload.password;

          if (!isPassValid) throw new Error(_invalidPasswordError);

          if (existingUser && isPassValid) {
            const profile = findProfile(existingUser.id);
            set((state) => {
              state.user = { ...existingUser, profile };
              state.isAuth = true;
            });
            localStorage.setItem(AUTH_STORAGE_KEY, existingUser.username);
          }
        } catch (e: unknown) {
          set((state) => {
            state.error = e;
            state.isAuth = false;
          });
        }
      },

      logout: () => {
        set((state) => {
          state.user = null;
          state.isAuth = false;
          state.error = null;
        });
        localStorage.removeItem(AUTH_STORAGE_KEY);
      },

      checkAuth: () => {
        const storedUsername = localStorage.getItem(AUTH_STORAGE_KEY);

        if (!storedUsername) {
          set((state) => {
            state.isAuth = false;
            state.user = null;
          });
          return;
        }

        const existingUser = findUser(storedUsername);

        if (existingUser) {
          const profile = findProfile(existingUser.id);
          set((state) => {
            state.user = { ...existingUser, profile };
            state.isAuth = true;
          });
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
          set((state) => {
            state.isAuth = false;
            state.user = null;
          });
        }
      },
    })),
  ),
);
