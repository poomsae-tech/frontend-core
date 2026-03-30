import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Frown, Funnel, Smile } from "lucide-react";
import { CustomDataTable } from "@/components/custom-data-table";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  APPLICATIONS,
  STATISTIC_COLUMNS
} from "./applications-columns";
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
          <CustomDataTable columns={STATISTIC_COLUMNS} data={filteredStats} />
        </CardContent>
      </Card>
    </div>
  );
}
