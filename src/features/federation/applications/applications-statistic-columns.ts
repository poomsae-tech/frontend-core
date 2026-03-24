import type { ColumnDef } from "@/components/custom-data-table";

export type Application = {
  id: number;
  clubName: string;
  date: string;
  status: AppStatus;
};

export type AppStatus = "На рассмотрении" | "Принята" | "Отклонена";

export const APPLICATIONS: Application[] = [
  {
    id: 1,
    clubName: "СК Фаворит",
    date: "20 Февраля 2026",
    status: "На рассмотрении",
  },
  {
    id: 2,
    clubName: "СК Олимп",
    date: "19 Февраля 2026",
    status: "Принята",
  },
  {
    id: 3,
    clubName: "ТКД Мастер",
    date: "18 Февраля 2026",
    status: "Отклонена",
  },
  {
    id: 4,
    clubName: "СК Восток",
    date: "17 Февраля 2026",
    status: "Принята",
  },
  {
    id: 5,
    clubName: "СК Чемпион",
    date: "16 Февраля 2026",
    status: "Принята",
  },
  {
    id: 6,
    clubName: "СК Титан",
    date: "15 Февраля 2026",
    status: "На рассмотрении",
  },
];

export const STATISTIC_COLUMNS: ColumnDef<Application>[] = [
  {
    key: "id",
    header: "ID",
    cell: (row) => row.id,
  },

  {
    key: "clubName",
    header: "Название турнира",
    cell: (row) => row.clubName,
  },

  {
    key: "date",
    header: "Дата",
    cell: (row) => row.date,
  },

  {
    key: "status",
    header: "Результат",
    cell: (row) => {
      	if (row.status === "На рассмотрении") return "На рассмотрении";
      	if (row.status === "Принята") return "Принята";
	if (row.status === "Отклонена") return "Отклонена";
      return "";
    },
  },
];
