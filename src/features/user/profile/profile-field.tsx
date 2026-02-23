import { cn } from "@/lib/utils";

interface ProfileFieldProps {
  label: string;
  value: string;
}
export function ProfileField({
  label,
  value,
  className,
  ...props
}: React.ComponentProps<"div"> & ProfileFieldProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex w-full border-b border-border pb-1 ">
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>

      <div className="w-full rounded-full bg-secondary px-5 py-2.5 text-left">
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );
}
