import type { AppRole } from "@/shared/types/role.types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RoleCardConfig } from "./role-select.types";

interface RoleCardProps {
  config: RoleCardConfig;
  isSelected: boolean;
  onClick: (role: AppRole) => void;
}

export function RoleCard({ config, isSelected, onClick }: RoleCardProps) {
  const { id, title, description, icon: Icon } = config;

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
        "cursor-pointer border-2 py-2 px-3 transition-all duration-150 ease-out",
        isSelected
          ? "border-primary shadow-lg"
          : "border-transparent hover:border-primary/50 hover:shadow-md",
      )}
    >
      <CardHeader className="p-0">
        <div
          className={cn(
            "mb-1 flex size-10 items-center justify-center rounded-lg transition-colors duration-150",
            isSelected ? "bg-primary/15" : "bg-muted",
          )}
        >
          <Icon
            className={cn(
              "size-5 transition-colors duration-150",
              isSelected ? "text-primary" : "text-muted-foreground",
            )}
          />
        </div>

        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
