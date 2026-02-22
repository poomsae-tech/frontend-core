import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-8xl font-bold text-muted-foreground">404</h1>
      <h2 className="text-2xl font-semibold">Страница не найдена</h2>
      <p className="text-muted-foreground text-center max-w-md">
        Страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link to="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
}
