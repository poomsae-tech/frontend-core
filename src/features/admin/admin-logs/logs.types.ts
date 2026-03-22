export type LogLevel = "Инфо" | "Предупреждение" | "Ошибка" | "Отладка";

export interface LogItem {
  id: number;
  source: string;
  message: string;
  date: string;
  level: LogLevel;
}