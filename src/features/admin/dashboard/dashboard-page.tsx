import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
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
import { Building2, Users, Trophy, ExternalLink } from "lucide-react";

const STATS = [
  {
    label: "Организации",
    value: 5,
    icon: Building2,
    to: "/admin/organizations",
  },
  { label: "Пользователи", value: 347, icon: Users, to: "/admin/users" },
  {
    label: "Активные турниры",
    value: 12,
    icon: Trophy,
    to: "/admin/tournaments",
  },
];

type ComplaintStatus = "На рассмотрении" | "Отклонена" | "Решена";

interface Complaint {
  id: number;
  organization: string;
  topic: string;
  date: string;
  status: ComplaintStatus;
}

const COMPLAINTS: Complaint[] = [
  {
    id: 1,
    organization: "Русарс",
    topic: "Обслуживание",
    date: "22:34 20.02.2026",
    status: "На рассмотрении",
  },
  {
    id: 2,
    organization: "Русарс",
    topic: "Обслуживание",
    date: "22:34 20.02.2026",
    status: "На рассмотрении",
  },
  {
    id: 3,
    organization: "Прогресс",
    topic: "Оплата",
    date: "18:10 20.02.2026",
    status: "Отклонена",
  },
  {
    id: 4,
    organization: "Олимп",
    topic: "Расписание",
    date: "09:45 19.02.2026",
    status: "Решена",
  },
];

type LogAction = "Вход" | "Выход" | "Изменение";

interface LogEntry {
  id: number;
  action: LogAction;
  user: string;
  time: string;
}

const LOGS: LogEntry[] = [
  {
    id: 1,
    action: "Вход",
    user: "Русаков Иван Петрович",
    time: "20:55 21.02.2026",
  },
  {
    id: 2,
    action: "Выход",
    user: "Пожаркин Иван Петрович",
    time: "20:54 21.02.2026",
  },
  {
    id: 3,
    action: "Вход",
    user: "Русаков Иван Петрович",
    time: "20:55 21.02.2026",
  },
  {
    id: 4,
    action: "Изменение",
    user: "Смирнов Алексей Владимирович",
    time: "19:30 21.02.2026",
  },
];

const STATUS_STYLES: Record<ComplaintStatus, string> = {
  "На рассмотрении": "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  Отклонена: "bg-red-500/15 text-red-600 border-red-500/30",
  Решена: "bg-green-500/15 text-green-600 border-green-500/30",
};

function ComplaintStatusBadge({ status }: { status: ComplaintStatus }) {
  return (
    <Badge variant="outline" className={STATUS_STYLES[status]}>
      {status}
    </Badge>
  );
}

const ACTION_STYLES: Record<LogAction, string> = {
  Вход: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  Выход: "bg-slate-500/15 text-slate-600 border-slate-500/30",
  Изменение: "bg-orange-500/15 text-orange-600 border-orange-500/30",
};

function LogActionBadge({ action }: { action: LogAction }) {
  return (
    <Badge variant="outline" className={ACTION_STYLES[action]}>
      {action}
    </Badge>
  );
}

export function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map(({ label, value, icon: Icon, to }) => (
          <Card key={label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {label}
              </CardTitle>
              <Link
                to={to}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
              </Link>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Icon className="text-muted-foreground shrink-0" size={20} />
              <span className="text-4xl font-bold">{value}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Последние жалобы
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6">Организация</TableHead>
                <TableHead>Тема</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPLAINTS.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="px-6 font-medium">
                    {c.organization}
                  </TableCell>
                  <TableCell>{c.topic}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {c.date}
                  </TableCell>
                  <TableCell>
                    <ComplaintStatusBadge status={c.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-end border-t pt-4">
          <Link to="/admin/complaints">
            <Button variant="outline" size="sm">
              Все жалобы
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Последние логи
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6">Действие</TableHead>
                <TableHead>Пользователь</TableHead>
                <TableHead>Время</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {LOGS.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="px-6">
                    <LogActionBadge action={log.action} />
                  </TableCell>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {log.time}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-end border-t pt-4">
          <Link to="/admin/logs">
            <Button variant="outline" size="sm">
              Все логи
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
