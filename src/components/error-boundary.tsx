import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function RouteErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-8xl font-bold text-muted-foreground">{error.status}</h1>
        <h2 className="text-2xl font-semibold">
          {error.status === 404
            ? "Страница не найдена"
            : error.status === 403
              ? "Доступ запрещён"
              : error.status === 500
                ? "Ошибка сервера"
                : "Что-то пошло не так"}
        </h2>
        {error.data && (
          <p className="text-muted-foreground max-w-md">{String(error.data)}</p>
        )}
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }

  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "Неизвестная ошибка";

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="text-4xl font-bold">Произошла ошибка</h1>
      <p className="text-muted-foreground max-w-md">{message}</p>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => window.location.reload()}>
          Перезагрузить
        </Button>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
}
