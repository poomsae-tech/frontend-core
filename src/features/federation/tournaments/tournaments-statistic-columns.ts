import type { ColumnDef } from "@/components/custom-data-table";

export type Tournament = {
  id: number;
  tournamentName: string;
  date: string;
  place: string;
  status: TournamentStatus;
};

export type TournamentStatus = "Запланирован" | "Проводится" | "Завершен";

export const TOURNAMENTS: Tournament[] = [
  {
    id: 1,
    tournamentName: "Poomsae Tech Open",
    date: "15 марта 2026г - 29 марта 2026г",
    place: "г. Новосибирск",
    status: "Проводится"
  },
  {
    id: 2,
    tournamentName: "Tournament VIP",
    date: "2 февраля 2026г - 3 февраля 2026г",
    place: "г. Бердск",
    status: "Завершен"
  },
  {
    id: 3,
    tournamentName: "Winter Tournament",
    date: "15 января 2026г - 20 января 2026г",
    place: "г. Обь",
    status: "Завершен"
  },
  {
    id: 4,
    tournamentName: "Poomsae Tech Open #2",
    date: "4 июня 2026г - 20 июня 2026г",
    place: "г. Новосибирск",
    status: "Запланирован"
  },
];

export const STATISTIC_COLUMNS: ColumnDef<Application>[] = [
  {
    key: "id",
    header: "ID",
    cell: (row) => row.id,
  },

  {
    key: "tournamentName",
    header: "Название турнира",
    cell: (row) => row.tournamentName,
  },
  {
    key: "place",
    header: "Место проведения",
    cell: (row) => row.place,
  },

  {
    key: "date",
    header: "Дата",
    cell: (row) => row.date,
  },

  {
    key: "TournamentStatus",
    header: "Статус",
    cell: (row) => {
      	if (row.status === "На рассмотрении") return "На рассмотрении";
      	if (row.status === "Принята") return "Принята";
	if (row.status === "Отклонена") return "Отклонена";
      return "";
    },
  },
];
