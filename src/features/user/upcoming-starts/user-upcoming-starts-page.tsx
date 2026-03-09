import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomDataTable } from "@/components/custom-data-table";
import { PageHeader } from "@/components/page-header";
import {
  MOCK_UPCOMING_EVENTS,
  UPCOMING_EVENTS_COLUMNS,
  type StartEventStatus,
} from "./user-upcoming-starts-columns";
import { Funnel, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<StartEventStatus, string> = {
  confirmed: "Подтверждена",
  draw: "Жеребьёвка",
  imminent: "Бой через 2 часа",
  registration: "Регистрация",
};

export function UserUpcomingStartsPage() {
  const [statusFilter, setStatusFilter] = useState<StartEventStatus | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = MOCK_UPCOMING_EVENTS.filter((event) => {
    const matchesStatus = statusFilter ? event.status === statusFilter : true;
    const matchesSearch = event.tournamentName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="container mx-auto pb-12 space-y-6">
      <PageHeader title="Ближайшие Старты" showBack backTo="/user" />

      <div className="flex flex-col sm:flex-row gap-4 items-center max-w-3xl mx-auto w-full">
        <div className="relative flex-1 w-full">
          <Input
            placeholder="Поиск по названию..."
            className="h-10 pl-10 pr-8 text-sm rounded-xl border-muted-foreground/20 focus-visible:ring-primary/20 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={statusFilter ? "default" : "outline"}
              size="sm"
              className="h-10 px-4 rounded-xl gap-2 font-semibold shrink-0 w-full sm:w-auto"
            >
              <Funnel size={14} />
              <span>Статус</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="end" sideOffset={8}>
            <div className="space-y-1">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest px-2 py-1.5 border-b mb-1">
                Выберите статус
              </p>
              {(Object.keys(STATUS_LABELS) as StartEventStatus[]).map((status) => (
                <Button
                  key={status}
                  variant="ghost"
                  size="sm"
                  className={cn("w-full justify-start font-medium rounded-lg px-2 text-xs", statusFilter === status && "bg-primary/10 text-primary")}
                  onClick={() => setStatusFilter(status)}
                >
                  {STATUS_LABELS[status]}
                </Button>
              ))}
              {statusFilter && (
                <>
                  <div className="h-px bg-border my-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-medium text-destructive hover:text-destructive hover:bg-destructive/5 rounded-lg px-2 text-xs"
                    onClick={() => setStatusFilter(null)}
                  >
                    Сбросить
                  </Button>
                </>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Card className="overflow-hidden border shadow-sm">
        <CardHeader className="border-b bg-muted/30 py-4">
          <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Список событий
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <CustomDataTable
            data={filteredEvents}
            columns={UPCOMING_EVENTS_COLUMNS}
          />
        </CardContent>
      </Card>
    </div>
  );
}
