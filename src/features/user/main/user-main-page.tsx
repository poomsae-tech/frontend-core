import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { userNavItems } from "@/router";
import { Image } from "lucide-react";
import { Link } from "react-router-dom";

export function UserMainPage() {
  return (
    <Card className="space-y-0 p-0 gap-12 h-full">
      <CardHeader className="pt-12 px-12">
        <CardTitle className="mx-auto text-2xl font-medium">
          Привет, Пользователь!
        </CardTitle>
      </CardHeader>
      <CardContent className="px-12 h-full">
        <div className="flex h-full w-full items-center gap-12">
          <picture className="size-80 rounded-2xl overflow-hidden flex">
            {/* 
                        <img
              src={user.profile.avatar}
              alt={user?.username + "_avatar"}
              className="size-full object-cover object-center"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              width={320}
              height={320}
            /> */}

            <div className="size-full flex items-center justify-center bg-gray-300 text-white">
              <Image size={168} />
            </div>
          </picture>
          <div className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2">
            <span className="font-semibold text-lg">ФИО</span>
            <span className="font-medium text-lg">Иванов Иван Иванович</span>
            <span className="font-semibold text-lg">Клуб</span>
            <span className="font-medium text-lg">НазваниеКлуба</span>
            <span className="font-semibold text-lg">Тренер</span>
            <span className="font-medium text-lg">ИмяТренера</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="py-12 px-12">
        <div className="flex flex-wrap gap-3 w-full">
          {userNavItems.map((item) => {
            if (item.to === location.pathname) return;
            return (
              <Link className="flex-2/5" key={item.label} to={item.to}>
                <Button
                  className="w-full text-lg py-6 *:last:size-6! rounded-2xl"
                  size={"lg"}
                >
                  {item.label}
                  {item.icon}
                </Button>
              </Link>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
