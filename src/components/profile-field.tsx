import { cn } from "@/lib/utils";

interface ProfileFieldProps {
    label: string;
    value: string | number;
    align?: "left" | "right";
    className?: string;
}

export function ProfileField({
    label,
    value,
    align = "left",
    className,
}: ProfileFieldProps) {
    return (
        <div className={cn(
            "flex flex-col py-3 border-b border-muted last:border-0 transition-colors hover:bg-muted/5",
            align === "right" ? "items-end text-right" : "items-start text-left",
            className
        )}>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-1">
                {label}
            </span>
            <p className="text-base font-medium text-foreground">{value}</p>
        </div>
    );
}
