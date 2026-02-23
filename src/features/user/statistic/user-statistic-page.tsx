import { CustomDataTable } from "@/components/custom-data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export function UserStatisticPage() {
  const [resultFilter, setResultFilter] = useState<Stat["result"] | null>(null);

  const filteredStats = resultFilter
    ? MOCK_STATISTICS.filter((stat) => stat.result === resultFilter)
    : MOCK_STATISTICS;

  return (
    <Card>
      <CardHeader className="pb-10 pt-12">
        <CardTitle className="mx-auto text-4xl font-semibold uppercase tracking-wide text-foreground">
          Статистика
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 items-center flex flex-col gap-12">
        <div className="flex gap-6 w-full px-12">
          <div className="flex justify-center flex-1 items-center text-base font-medium gap-8 rounded-full bg-secondary px-6 py-4">
            <Smile />
            <span>Побед:</span>
            <span>2</span>
          </div>
          <div className="flex justify-center flex-1 items-center text-base font-medium gap-8 rounded-full bg-secondary px-6 py-4">
            <Frown />
            <span>Поражений:</span>
            <span>1</span>
          </div>
          <Popover>
            <PopoverTrigger>
              <Button
                variant={"secondary"}
                size={"icon-lg"}
                className="rounded-full h-full cursor-pointer aspect-square w-fit"
              >
                <Funnel size={16} className="size-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-fit *:*:justify-start"
              align="end"
              sideOffset={8}
            >
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                  Фильтр по результату
                </p>
                <Button
                  className="cursor-pointer"
                  disabled={resultFilter === "win"}
                  size={"lg"}
                  variant={"ghost"}
                  onClick={() => setResultFilter("win")}
                >
                  Победы
                </Button>
                <Button
                  className="cursor-pointer"
                  disabled={resultFilter === "lose"}
                  size={"lg"}
                  variant={"ghost"}
                  onClick={() => setResultFilter("lose")}
                >
                  Поражения
                </Button>
                {resultFilter && (
                  <>
                    <div className="h-px bg-border my-1" />
                    <Button
                      className="cursor-pointer"
                      size={"lg"}
                      variant={"destructive"}
                      onClick={() => setResultFilter(null)}
                    >
                      Очистить
                    </Button>
                  </>
                )}{" "}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <CustomDataTable data={filteredStats} columns={STATISTIC_COLUMNS} />
      </CardContent>
    </Card>
  );
}
