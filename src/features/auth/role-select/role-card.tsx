import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RoleCardConfig } from "./role-select.types";

interface RoleCardProps {
  config: RoleCardConfig;
  isSelected: boolean;
  onClick: (roleId: string) => void;
}

export function RoleCard({ config, isSelected, onClick }: RoleCardProps) {
  const { id, title, icon: Icon } = config;

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onClick={() => onClick(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(id);
      }}
      className={cn(
        "cursor-pointer border transition-all p-0 duration-150 ease-out relative",
        isSelected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border hover:border-primary/50 hover:bg-accent/50",
      )}
    >
      <CardHeader className="p-2 md:p-4 relative z-10 flex flex-col gap-2">
        <div
          className={cn(
            "flex size-8 md:size-11 items-center justify-center rounded-full transition-colors duration-150",
            isSelected
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground",
          )}
        >
          <Icon className="size-4 md:size-5.5" />
        </div>

        <CardTitle className="text-sm text-shadow-2xs md:text-lg font-medium line-clamp-2 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <Icon
        className={cn(
          "size-20 md:size-24 z-0 absolute -bottom-6 -right-6 -rotate-25 transition-opacity duration-150",
          isSelected ? "opacity-25" : "opacity-5",
        )}
      />
    </Card>
  );
}
