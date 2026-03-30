export type Tournament = {
  id: number;
  tournamentName: string;
  date: string;
  place: string;
  status: TournamentStatus;
};

export type TournamentStatus = "Запланирован" | "Проводится" | "Завершен";