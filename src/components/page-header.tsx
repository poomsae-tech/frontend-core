import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    showBack?: boolean;
    backTo?: string;
    className?: string;
    children?: React.ReactNode;
}

export function PageHeader({
    title,
    showBack = false,
    backTo,
    className,
    children,
}: PageHeaderProps) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (backTo) {
            navigate(backTo);
        } else {
            navigate(-1);
        }
    };

    return (
        <div
            className={cn(
                "relative flex flex-col md:flex-row items-center justify-between gap-4 py-6 md:py-10",
                className,
            )}
        >
            <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                {showBack && (
                    <button
                        onClick={handleBack}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-primary hover:bg-primary/10 transition-colors border shrink-0"
                        aria-label="Назад"
                    >
                        <ArrowLeft size={20} />
                    </button>
                )}
                <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide text-foreground text-center md:text-left">
                    {title}
                </h1>
            </div>
            {children && <div className="flex items-center gap-3 w-full md:w-auto">{children}</div>}
        </div>
    );
}
