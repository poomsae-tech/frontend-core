import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@/components/custom-data-table";
import type { LogItem, LogLevel } from "./logs.types";

export const MOCK_LOGS: LogItem[] = [
  {
    id: 1,
    source: "AuthService",
    message: "Успешный вход администратора в систему",
    date: "10:12 20.02.2026",
    level: "Инфо",
  },
  {
    id: 2,
    source: "ComplaintsService",
    message: "Создана новая жалоба от организации Русарс",
    date: "10:18 20.02.2026",
    level: "Предупреждение",
  },
  {
    id: 3,
    source: "Database",
    message: "Не удалось получить список организаций",
    date: "10:25 20.02.2026",
    level: "Ошибка",
  },
  {
    id: 4,
    source: "Scheduler",
    message: "Запущена плановая синхронизация данных",
    date: "10:40 20.02.2026",
    level: "Инфо",
  },
  {
    id: 5,
    source: "API Gateway",
    message: "Отладочная запись запроса к внутреннему сервису",
    date: "10:52 20.02.2026",
    level: "Отладка",
  },
  {
    id: 6,
    source: "Notifications",
    message: "Ошибка при отправке email-уведомления пользователю",
    date: "11:03 20.02.2026",
    level: "Ошибка",
  },
];

const LEVEL_STYLES: Record<LogLevel, string> = {
  Инфо: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  Предупреждение: "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  Ошибка: "bg-red-500/15 text-red-600 border-red-500/30",
  Отладка: "bg-slate-500/15 text-slate-600 border-slate-500/30",
};

export const LOGS_COLUMNS: ColumnDef<LogItem>[] = [
  {
    key: "source",
    header: "Источник",
    cell: (row) => <span className="font-medium">{row.source}</span>,
  },
  {
    key: "message",
    header: "Сообщение",
    cell: (row) => row.message,
  },
  {
    key: "date",
    header: "Дата",
    cellClassName: "text-muted-foreground text-sm",
    cell: (row) => row.date,
  },
  {
    key: "level",
    header: "Уровень",
    cell: (row) => (
      <Badge variant="outline" className={LEVEL_STYLES[row.level]}>
        {row.level}
      </Badge>
    ),
  },
];