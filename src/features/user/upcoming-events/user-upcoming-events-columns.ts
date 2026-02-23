import type { ColumnDef } from "@/components/custom-data-table";

export type EventStatus = "confirmed" | "draw" | "imminent" | "registration";

export type UpcomingEvent = {
  date: Date;
  tournamentName: string;
  status: EventStatus;
};

export const MOCK_UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    date: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // Через 2 часа
    tournamentName: "Poomsae Tech Cup",
    status: "imminent",
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() + 1)), // Завтра
    tournamentName: "City Championship 2026",
    status: "confirmed",
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() + 5)), // Через 5 дней
    tournamentName: "Regional Qualifiers",
    status: "draw",
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() + 14)), // Через 2 недели
    tournamentName: "Winter Open",
    status: "registration",
  },
];

export const UPCOMING_EVENTS_COLUMNS: ColumnDef<UpcomingEvent>[] = [
  {
    key: "date",
    header: "Дата",
    cell: (row) => row.date.toLocaleDateString("ru-RU"),
  },
  {
    key: "tournamentName",
    header: "Название турнира",
    cell: (row) => row.tournamentName,
  },
  {
    key: "status",
    header: "Статус",
    cell: (row) => {
      switch (row.status) {
        case "confirmed":
          return "Подтверждена";
        case "draw":
          return "Жеребьёвка";
        case "imminent":
          return "Бой через 2 часа";
        case "registration":
          return "Регистрация";
        default:
          return "Неизвестно";
      }
    },
  },
];
