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
  TOURNAMENTS,
  STATISTIC_COLUMNS,
  type Tournament,
} from "./tournaments-statistic-columns";
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



interface Tournament {
  id: number;
  tournamentName: string;
  date: string;
  place: string;
  status: TournamentStatus;
}



const STATUS_STYLES: Record<TournamentStatus, string> = {
  "Запланирован": "bg-yellow-500/15 text-yellow-600 border-yellow-500/30",
  "Проводится": "bg-blue-500/15 text-blue-600 border-blue-500/30",
  "Завершен": "bg-green-500/15 text-green-600 border-green-500/30",
};

function TournamentStatusBadge({ status }: { status: TournamentStatus }) {
  return (
    <Badge variant="outline" className={STATUS_STYLES[status]}>
      {status}
    </Badge>
  );
}

export function TournamentsPage() {
  const getInitials = (name: string) => {
    return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  };

const [resultFilter, setResultFilter] = useState<Tournament["status"] | null>(null);

  const filteredStats = resultFilter
    ? TOURNAMENTS.filter((stat) => stat.status === resultFilter)
    : TOURNAMENTS;
	
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
     

      <Card className="rounded-2xl border border-border/50 bg-card mt-2 overflow-hidden shadow-sm">
        <CardHeader className="container mx-auto pb-12 space-y-6">
	<Table>
	<TableHead className="text-center" width = "33%">
	</TableHead>
	<TableHead className="text-center" width = "33%">
          <CardTitle className="text-center text-lg font-semibold">
            Турниры
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
                По статусу
              </p>
              <Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "На рассмотрении" && "bg-primary/10 text-primary")}
                onClick={() => {setResultFilter("Запланирован"); console.log(filteredStats)}}
              >
                Запланирован
              </Button>
		<Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "Принята" && "bg-primary/10 text-primary")}
                onClick={() => {setResultFilter("Проводится"); console.log(filteredStats)}}
              >
                Проводится
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "Отклонена" && "bg-primary/10 text-primary")}
                onClick={() => {setResultFilter("Завершен"); console.log(filteredStats)}}
              >
                Завершен
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
                  Название турнира
                </TableHead>
                <TableHead className="py-4 uppercase text-xs font-semibold tracking-wider text-center text-muted-foreground w-1/3">
                  Дата
                </TableHead>
<TableHead className="py-4 uppercase text-xs font-semibold tracking-wider text-center text-muted-foreground w-1/3">
                  Место
                </TableHead>
                <TableHead className="py-4 pr-8 uppercase text-xs font-semibold tracking-wider text-right text-muted-foreground w-1/3">
                  Статус
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStats.map((tour) => (
                <TableRow key={tour.id} className="group transition-colors hover:bg-muted/30 border-b-border">
                  <TableCell className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-9 w-9 border border-border/50">
                        <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium uppercase">
                          {getInitials(tour.tournamentName)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{tour.tournamentName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm tracking-tight py-4">
                    {tour.date}
                  </TableCell>
                 <TableCell className="text-center text-muted-foreground text-sm tracking-tight py-4">
                    {tour.place}
                  </TableCell>
                  <TableCell className="text-right pr-8 py-4">
                    <TournamentStatusBadge status={tour.status} />
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
