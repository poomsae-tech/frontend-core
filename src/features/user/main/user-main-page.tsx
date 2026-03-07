import { MOCK_USER_DATA } from "@/shared/mocks/user.mock";

export function UserMainPage() {
  const user = MOCK_USER_DATA;
  const firstName = user.fullName.split(" ")[1];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
        Привет, <span className="font-semibold text-primary">{firstName}</span>
      </h1>
      <p className="text-muted-foreground text-lg max-w-md font-medium uppercase tracking-[0.2em] opacity-60">
        Добро пожаловать в Poomsae Tech
      </p>
    </div>
  );
}
