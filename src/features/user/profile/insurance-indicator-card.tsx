import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";
import {
  InsuranceIndicatorIcon,
  type InsuranceStatus,
} from "./insurance-indicator-icon";

interface InsuranceIndicatorProps {
  status: InsuranceStatus;
}

export function InsuranceIndicatorCard({ status }: InsuranceIndicatorProps) {
  const [openInfoPopover, setOpenInfoPopover] = useState(false);

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-between gap-4 rounded-full bg-secondary px-6 py-4  sm:flex-row">
      <div className="flex items-center gap-3">
        <Popover open={openInfoPopover}>
          <PopoverTrigger>
            <Info
              onMouseEnter={() => setOpenInfoPopover(true)}
              onMouseLeave={() => setOpenInfoPopover(false)}
              className="h-5 w-5 cursor-pointer text-muted-foreground"
            />
          </PopoverTrigger>
          <PopoverContent className="w-fit" side="top" align="start">
            <div className="flex flex-col gap-3">
              <span className="gap-3 flex">
                {InsuranceIndicatorIcon("valid")}
                <span>Действительна</span>
              </span>
              <span className="gap-3 flex">
                {InsuranceIndicatorIcon("warning")}
                <span>Скоро истекает</span>
              </span>
              <span className="gap-3 flex">
                {InsuranceIndicatorIcon("expired")}
                <span>Истекла</span>
              </span>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <span className="text-center text-sm font-medium text-foreground md:text-base">
        Индикатор срока страховки
      </span>

      <div className="grid place-items-center aspect-square ">
        {InsuranceIndicatorIcon(status)}
      </div>
    </div>
  );
}
