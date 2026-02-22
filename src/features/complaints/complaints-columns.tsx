import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@/components/admin-data-table";
import type { Complaint, ComplaintStatus } from "./complaints.types";

export const MOCK_COMPLAINTS: Complaint[] = [
  {
    id: 1,
    organization: "Русарс",
    topic: "Обслуживание",
    date: "22:34 20.02.2026",
    status: "На рассмотрении",
  },
  {
    id: 2,
    organization: "Олимп",
    topic: "Оплата",
    date: "18:10 20.02.2026",
    status: "Отклонена",
  },
  {
    id: 3,
    organization: "Прогресс",
    topic: "Расписание",
    date: "09:45 19.02.2026",
    status: "Решена",
  },
  {
    id: 4,
    organization: "Спартак",
    topic: "Качество судейства",
    date: "14:20 18.02.2026",
    status: "На рассмотрении",
  },
  {
    id: 5,
    organization: "Динамо",
    topic: "Техническая поддержка",
    date: "11:05 17.02.2026",
    status: "Решена",
  },
  {
    id: 6,
    organization: "Русарс",
    topic: "Регистрация участников",
    date: "08:30 16.02.2026",
    status: "Отклонена",
  },
];

const STATUS_STYLES: Record<ComplaintStatus, string> = {
  "На рассмотрении": "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  Отклонена: "bg-red-500/15 text-red-600 border-red-500/30",
  Решена: "bg-green-500/15 text-green-600 border-green-500/30",
};

function OrganizationAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground select-none">
        {initials}
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
}

export const COMPLAINTS_COLUMNS: ColumnDef<Complaint>[] = [
  {
    key: "organization",
    header: "Организация",
    cell: (row) => <OrganizationAvatar name={row.organization} />,
  },
  {
    key: "topic",
    header: "Тема",
    cell: (row) => row.topic,
  },
  {
    key: "date",
    header: "Дата",
    cellClassName: "text-muted-foreground text-sm",
    cell: (row) => row.date,
  },
  {
    key: "status",
    header: "Статус",
    cell: (row) => (
      <Badge variant="outline" className={STATUS_STYLES[row.status]}>
        {row.status}
      </Badge>
    ),
  },
];
