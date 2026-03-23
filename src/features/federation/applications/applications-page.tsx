import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Frown, Funnel, Smile } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  APPLICATIONS,
  STATISTIC_COLUMNS,
  type Application,
} from "./applications-statistic-columns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState } from "react";

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


interface Application {
  id: number;
  clubName: string;
  date: string;
  status: AppStatus;
}



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

export function ApplicationsPage() {
  const getInitials = (name: string) => {
    return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  };

const [resultFilter, setResultFilter] = useState<Application["status"] | null>(null);

  const filteredStats = resultFilter
    ? APPLICATIONS.filter((stat) => stat.status === resultFilter)
    : APPLICATIONS;
	
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
     

      <Card className="rounded-2xl border border-border/50 bg-card mt-2 overflow-hidden shadow-sm">
        <CardHeader className="container mx-auto pb-12 space-y-6">
	<Table>
	<TableHead className="text-center" width = "33%">
	</TableHead>
	<TableHead className="text-center" width = "33%">
          <CardTitle className="text-center text-lg font-semibold">
            Заявки на аккредитацию
          </CardTitle>
</TableHead>
<TableHead className="text-right" width = "33%">
	<Popover>
          <PopoverTrigger asChild>
            <Button
              variant={resultFilter ? "default" : "outline"}
              size="sm"
              className="rounded-xl gap-2 font-semibold"
            >
              <Funnel size={14} />
              <span>Фильтр</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="end" sideOffset={8}>
            <div className="space-y-1">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest px-2 py-1.5 border-b mb-1">
                По результату
              </p>
              <Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "На рассмотрении" && "bg-primary/10 text-primary")}
                onClick={() => {setResultFilter("На рассмотрении"); console.log(filteredStats)}}
              >
                На рассмотрении
              </Button>
		<Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "Принята" && "bg-primary/10 text-primary")}
                onClick={() => {setResultFilter("Принята"); console.log(filteredStats)}}
              >
                Принята
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "Отклонена" && "bg-primary/10 text-primary")}
                onClick={() => {setResultFilter("Отклонена"); console.log(filteredStats)}}
              >
                Отклонена
              </Button>
              {resultFilter && (
                <>
                  <div className="h-px bg-border my-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-medium text-destructive hover:text-destructive hover:bg-destructive/5 rounded-lg px-2"
                    onClick={() => setResultFilter(null)}
                  >
                    Сбросить
                  </Button>
                </>
              )}
            </div>
          </PopoverContent>
        </Popover>
	</TableHead>
	</Table>
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
              {filteredStats.map((app) => (
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
