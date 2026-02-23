import { redirect } from "react-router-dom";
import { useAuthStore } from "@/features/auth/auth.store";

const adminMiddleware = () => {
  const store = useAuthStore.getState();

  if (!store.isAuth) {
    store.checkAuth();
  }

  const { isAuth, user } = useAuthStore.getState();

  if (!isAuth) throw redirect("/login");
  if (user?.role !== "admin") throw redirect("/");

  return null;
};

const userMiddleware = () => {
  const store = useAuthStore.getState();
  if (!store.isAuth) {
    store.checkAuth();
  }
  const { isAuth, user } = useAuthStore.getState();
  if (!isAuth) throw redirect("/login");
  if (user?.role !== "user") throw redirect("/admin");

  return null;
};

const loginMiddleware = () => {
  const store = useAuthStore.getState();
  if (!store.isAuth) store.checkAuth();

  const { isAuth, user } = useAuthStore.getState();

  if (isAuth) {
    return user?.role === "admin" ? redirect("/admin") : redirect("/");
  }

  return null;
};

export { adminMiddleware, userMiddleware, loginMiddleware };
