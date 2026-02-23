import { cn } from "@/lib/utils";

export type InsuranceStatus = "valid" | "warning" | "expired";

export function InsuranceIndicatorIcon(status: InsuranceStatus) {
  const statusColors: Record<InsuranceStatus | "default", string> = {
    valid: "bg-green-500",
    warning: "bg-orange-400",
    expired: "bg-red-500",
    default: "bg-gray-500",
  };

  const colorClass = statusColors[status] || statusColors.default;

  return (
    <div className="relative w-5 rounded-full aspect-square ring ring-gray-300 bg-background shadow-sm">
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-1/2 aspect-square size-2 rounded-full",
          colorClass,
        )}
      />
    </div>
  );
}
