import { useState } from "react";
import { ArrowLeft, User, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleCard } from "./role-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MOCK_ROLE_CONFIGS } from "@/shared/mocks/role.mock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function RoleSelectPage() {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  const selectedRole = MOCK_ROLE_CONFIGS.find((r) => r.id === selectedRoleId);

  function handleContinue() {
    if (!selectedRoleId) return;
    // TODO: Действие при продолжении
    console.log("Selected role ID:", selectedRoleId);
  }

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-2 md:p-10">
      <Card className="relative max-w-2xl w-full">
        <CardHeader>
          <div className="text-center flex flex-col items-center gap-3">
            <div className="p-2.5 md:p-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              <User className="size-7 md:size-10" />
            </div>
            <h1 className="text-xl md:text-3xl font-bold tracking-tight">
              Выберите роль
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Выберите роль, с которой хотите продолжить работу в системе.
            </p>
          </div>
        </CardHeader>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"icon-sm"}
              variant={"ghost"}
              className="absolute top-4 left-4"
              // TODO: Вернуться назад (к авторизации)
            >
              <ArrowLeft className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Вернуться назад</TooltipContent>
        </Tooltip>
        <CardContent className="space-y-4 max-sm:p-2">
          <div className="grid w-full grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3">
            {MOCK_ROLE_CONFIGS.map((config) => (
              <RoleCard
                key={config.id}
                config={config}
                isSelected={selectedRoleId === config.id}
                onClick={setSelectedRoleId}
              />
            ))}
          </div>

          {selectedRole && (
            <div className="rounded-xl border bg-muted/30 p-4 transition-all animate-in fade-in slide-in-from-bottom-2">
              <div className="flex gap-3">
                <Info className="size-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-sm leading-none">
                    {selectedRole.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-tight">
                    {selectedRole.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            size="lg"
            disabled={!selectedRoleId}
            onClick={handleContinue}
            className="w-full text-base py-5 sm:py-6 sm:text-lg"
          >
            Продолжить
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
