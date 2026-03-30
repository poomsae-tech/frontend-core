import type { ColumnDef } from "@/components/custom-data-table";

import type { Application, AppStatus } from "./applications.types";

import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

const STATUS_STYLES: Record<AppStatus, string> = {
  "На рассмотрении": "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  "Отклонена": "bg-red-500/15 text-red-600 border-red-500/30",
  "Принята": "bg-green-500/15 text-green-600 border-green-500/30",
};

const getInitials = (name: string) => {
    return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  };

export const STATISTIC_COLUMNS: ColumnDef<Application>[] = [

  {
    key: "clubName",
    header: "Название турнира",
    cell: (row) => (
		<div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9 border border-border/50">
                        <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium uppercase">
                          {getInitials(row.clubName)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{row.clubName}</span>
                    </div>
	),
  },

  {
    key: "date",
    headerClassName: "text-center",
    header: "Дата",
    cellClassName: "text-center",
    cell: (row) => row.date,
  },
  {
    key: "status",
    header: "Статус",
    headerClassName: "text-right",
    cellClassName: "text-right",
    cell: (row) => (
      <Badge variant="outline" className={STATUS_STYLES[row.status]}>
        {row.status}
      </Badge>
    ),
  }
];
