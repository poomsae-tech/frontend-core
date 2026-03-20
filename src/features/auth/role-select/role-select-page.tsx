import { useState } from "react";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AppRole } from "@/shared/types/role.types";
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
  const [selectedRole, setSelectedRole] = useState<AppRole | null>(null);

  function handleContinue() {
    if (!selectedRole) return;
    // TODO: Действие при продолжении
    console.log("Selected role:", selectedRole);
  }

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10">
      <Card className="max-w-2xl w-full">
        <CardHeader className="relative">
          <div className="text-center flex flex-col items-center gap-2">
            <div className="p-3 flex items-center justify-center bg-border/50 rounded-full">
              <User className="size-12 opacity-75" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Выберите роль</h1>
            <p className="text-muted-foreground text-base">
              Выберите роль, с которой хотите продолжить работу в системе.
            </p>
          </div>
          <Tooltip>
            <TooltipTrigger className="absolute top-0 left-4">
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                // TODO: Вернуться назад (к авторизации)
              >
                <ArrowLeft className="size-5" />
              </Button>
            </TooltipTrigger>

            <TooltipContent side="right">Вернуться назад</TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {MOCK_ROLE_CONFIGS.map((config) => (
              <RoleCard
                key={config.id}
                config={config}
                isSelected={selectedRole === config.id}
                onClick={setSelectedRole}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            size="lg"
            disabled={!selectedRole}
            onClick={handleContinue}
            className="w-full py-5 text-lg  max-w-2xl"
          >
            Продолжить
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
