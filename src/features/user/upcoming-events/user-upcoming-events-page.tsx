import { CustomDataTable } from "@/components/custom-data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MOCK_UPCOMING_EVENTS,
  UPCOMING_EVENTS_COLUMNS,
  type EventStatus,
} from "./user-upcoming-events-columns";
import { Funnel, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function UserUpcomingEventsPage() {
  const [statusFilter, setStatusFilter] = useState<EventStatus | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = MOCK_UPCOMING_EVENTS.filter((event) => {
    const matchesStatus = statusFilter ? event.status === statusFilter : true;
    const matchesSearch = event.tournamentName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusLabel = (status: EventStatus) => {
    switch (status) {
      case "confirmed":
        return "Подтверждена";
      case "draw":
        return "Жеребьёвка";
      case "imminent":
        return "Бой через 2 часа";
      case "registration":
        return "Регистрация";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-10 pt-12">
        <CardTitle className="mx-auto text-4xl font-semibold uppercase tracking-wide text-foreground">
          Ближайшие Старты
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 items-center flex flex-col gap-12">
        <div className="flex gap-4 w-full px-12 relative">
          <div className="relative flex-1 group">
            <Input
              placeholder="Поиск по названию турнира..."
              className="h-11 pl-4 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-0 h-full flex items-center text-muted-foreground pointer-events-none">
              <Search size={18} />
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="w-fit h-full cursor-pointer aspect-square rounded-md hover:bg-accent/50 text-muted-foreground transition-colors"
              >
                <Funnel
                  className={`${statusFilter ? "text-primary" : ""} size-5`}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2" align="end" sideOffset={8}>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                  Фильтр по статусу
                </p>
                {(
                  [
                    "confirmed",
                    "draw",
                    "imminent",
                    "registration",
                  ] as EventStatus[]
                ).map((status) => (
                  <Button
                    key={status}
                    variant="ghost"
                    size="lg"
                    className="justify-start cursor-pointer font-normal"
                    disabled={statusFilter === status}
                    onClick={() => setStatusFilter(status)}
                  >
                    {getStatusLabel(status)}
                  </Button>
                ))}
                {statusFilter && (
                  <>
                    <div className="h-px bg-border my-1" />
                    <Button
                      variant="destructive"
                      size="lg"
                      className="justify-start font-normal cursor-pointer"
                      onClick={() => setStatusFilter(null)}
                    >
                      Сбросить фильтр
                    </Button>
                  </>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <CustomDataTable
          data={filteredEvents}
          columns={UPCOMING_EVENTS_COLUMNS}
        />
      </CardContent>
    </Card>
  );
}
