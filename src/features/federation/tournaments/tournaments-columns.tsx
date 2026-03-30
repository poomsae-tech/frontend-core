import type { ColumnDef } from "@/components/custom-data-table";

import type { Tournament, TournamentStatus } from "./tournaments.types";

import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const STATUS_STYLES: Record<TournamentStatus, string> = {
  "Запланирован": "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  "Проводится": "bg-blue-500/15 text-blue-600 border-blue-500/30",
  "Завершен": "bg-green-500/15 text-green-600 border-green-500/30",
};

const getInitials = (name: string) => {
    return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  };

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
    key: "tournamentName",
    header: "Название турнира",
    cell: (row) => (
		<div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9 border border-border/50">
                        <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium uppercase">
                          {getInitials(row.tournamentName)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{row.tournamentName}</span>
                    </div>
	),
  },
  {
    key: "place",
    header: "Место проведения",
    headerClassName: "text-center",
    cellClassName: "text-center",
    cell: (row) => row.place,
  },

  {
    key: "date",
    header: "Дата",
    headerClassName: "text-center",
    cellClassName: "text-center",
    cell: (row) => row.date,
  },

  {
    key: "TournamentStatus",
    header: "Статус",
    headerClassName: "text-right",
    cellClassName: "text-right",
    cell: (row) => (
    <Badge variant="outline" className={STATUS_STYLES[row.status]}>
      {row.status}
    </Badge>
  ),
  },
];
