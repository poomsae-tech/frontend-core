import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomDataTable } from "@/components/custom-data-table";
import { PageHeader } from "@/components/page-header";
import {
  MOCK_STATISTICS,
  STATISTIC_COLUMNS,
  type Stat,
} from "./user-statistic-columns";
import { Frown, Funnel, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function UserStatisticPage() {
  const [resultFilter, setResultFilter] = useState<Stat["result"] | null>(null);

  const filteredStats = resultFilter
    ? MOCK_STATISTICS.filter((stat) => stat.result === resultFilter)
    : MOCK_STATISTICS;

  const wins = MOCK_STATISTICS.filter(s => s.result === "win").length;
  const losses = MOCK_STATISTICS.filter(s => s.result === "lose").length;

  return (
    <div className="container mx-auto pb-12 space-y-6">
      <PageHeader title="Статистика" showBack backTo="/user">
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
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "win" && "bg-primary/10 text-primary")}
                onClick={() => setResultFilter("win")}
              >
                Победы
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start font-medium rounded-lg px-2", resultFilter === "lose" && "bg-primary/10 text-primary")}
                onClick={() => setResultFilter("lose")}
              >
                Поражения
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
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Побед
            </CardTitle>
            <Smile className="size-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-semibold">{wins}</span>
          </CardContent>
        </Card>
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Поражений
            </CardTitle>
            <Frown className="size-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-semibold">{losses}</span>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden border shadow-sm">
        <CardHeader className="border-b bg-muted/30 py-4">
          <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            История выступлений
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <CustomDataTable data={filteredStats} columns={STATISTIC_COLUMNS} />
        </CardContent>
      </Card>
    </div>
  );
}
