export const getNameInitials = (name: string) => {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";

  return parts
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};
