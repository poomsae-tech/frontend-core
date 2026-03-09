import type { ColumnDef } from "@/components/custom-data-table";

export type Stat = {
  date: Date;
  tournamentName: string;
  place: string;
  result: TournamentResult;
};

export type TournamentResult = "win" | "lose";

export const MOCK_STATISTICS: Stat[] = [
  {
    date: new Date(),
    tournamentName: "Poomsae Tech Open",
    place: "Призовое",
    result: "win",
  },
  {
    date: new Date(),
    tournamentName: "Tournament VIP",
    place: "Победитель",
    result: "win",
  },
  {
    date: new Date(),
    tournamentName: "Winter Tournament",
    place: "Призовое",
    result: "lose",
  },
];

export const STATISTIC_COLUMNS: ColumnDef<Stat>[] = [
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
    key: "place",
    header: "Место",
    cell: (row) => row.place,
  },

  {
    key: "result",
    header: "Результат",
    cell: (row) => {
      if (row.result === "win") return "Победа";
      if (row.result === "lose") return "Поражение";
      return "";
    },
  },
];
