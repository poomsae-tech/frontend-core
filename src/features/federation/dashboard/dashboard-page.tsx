import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

const STATS = [
  {
    label: "Новые заявки на аккредитацию",
    value: 9,
    subtitle: "+3 за эту неделю",
    to: "/federation/applications",
  },
  {
    label: "Активные турниры",
    value: 4,
    subtitle: "+1 за эту неделю",
    to: "/federation/tournaments",
  },
  {
    label: "Календарь",
    value: 4,
    subtitle: "1 на этой неделе",
    to: "/federation/calendar",
  },
];

type AppStatus = "На рассмотрении" | "Принята" | "Отклонена";

interface Application {
  id: number;
  clubName: string;
  date: string;
  status: AppStatus;
}

const APPLICATIONS: Application[] = [
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

function ApplicationStatusBadge({ status }: { status: AppStatus }) {
  return (
    <Badge variant="outline" className={STATUS_STYLES[status]}>
      {status}
    </Badge>
  );
}

export function DashboardPage() {
  const getInitials = (name: string) => {
    return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map(({ label, value, subtitle, to }) => (
          <Card key={label} className="rounded-2xl border border-border/50 bg-card shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between pb-4">
              <CardTitle className="text-base font-medium leading-tight h-10">
                {label}
              </CardTitle>
              <Link
                to={to}
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Перейти"
              >
                <ExternalLink size={20} className="font-light" />
              </Link>
            </CardHeader>
            <CardContent className="flex items-baseline gap-3">
              <span className="text-5xl font-bold tracking-tight">{value}</span>
              {subtitle && (
                <span className="text-sm font-medium text-muted-foreground">
                  {subtitle}
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl border border-border/50 bg-card mt-2 overflow-hidden shadow-sm">
        <CardHeader className="border-b border-border pb-4 pt-6">
          <CardTitle className="text-center text-lg font-semibold tracking-wide">
            Список последних заявок
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 py-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b-border">
                <TableHead className="px-8 py-4 uppercase text-xs font-semibold tracking-wider text-muted-foreground w-1/3">
                  Название клуба
                </TableHead>
                <TableHead className="py-4 uppercase text-xs font-semibold tracking-wider text-center text-muted-foreground w-1/3">
                  Дата
                </TableHead>
                <TableHead className="py-4 pr-8 uppercase text-xs font-semibold tracking-wider text-right text-muted-foreground w-1/3">
                  Статус
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {APPLICATIONS.map((app) => (
                <TableRow key={app.id} className="group transition-colors hover:bg-muted/30 border-b-border">
                  <TableCell className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9 border border-border/50">
                        <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium uppercase">
                          {getInitials(app.clubName)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{app.clubName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm tracking-tight py-4">
                    {app.date}
                  </TableCell>
                  <TableCell className="text-right pr-8 py-4">
                    <ApplicationStatusBadge status={app.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
