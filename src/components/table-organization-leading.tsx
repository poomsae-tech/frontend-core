import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/lib/get-name-initials";

export function OrganizationLeading({
  name,
  avatar,
}: {
  name: string;
  avatar?: string;
}) {
  const initials = getNameInitials(name);

  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarImage alt={name + "_avatar"} src={avatar} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <span className="font-medium">{name}</span>
    </div>
  );
}
