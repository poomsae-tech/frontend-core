import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@/components/custom-data-table";
import type { Organization, OrganizationStatus } from "./organizations.types";

const STATUS_STYLES: Record<OrganizationStatus, string> = {
  active: "bg-green-500/15 text-green-600 border-green-500/30",
  inactive: "bg-red-500/15 text-red-600 border-red-500/30",
};

export const ORGANIZATIONS_COLUMNS: ColumnDef<Organization>[] = [
  {
    key: "id",
    header: "ID",
    cell: (row) => row.id,
  },
  {
    key: "name",
    header: "Название организации",
    cell: (row) => row.name,
  },
  {
    key: "email",
    header: "Email",
    cell: (row) => row.email,
  },
  {
    key: "phone",
    header: "Телефон",
    cell: (row) => row.phone,
  },
  {
    key: "status",
    header: "Статус",
    cell: (row) => (
      <Badge variant="outline" className={STATUS_STYLES[row.status]}>
        {row.status === "active" ? "Активна" : "Неактивна"}
      </Badge>
    ),
  },
  {
    key: "createdAt",
    header: "Дата создания",
    cellClassName: "text-muted-foreground text-sm",
    cell: (row) => row.createdAt,
  },
];

export const MOCK_ORGANIZATIONS: Organization[] = [
  {
    id: 1,
    name: "Русарс",
    email: "info@rusars.ru",
    phone: "+7 (495) 123-45-67",
    status: "active",
    createdAt: "10:15 15.01.2026",
    address: "Москва, ул. Ленина, 10",
  },
  {
    id: 2,
    name: "Олимп",
    email: "contact@olymp.ru",
    phone: "+7 (812) 234-56-78",
    status: "inactive",
    createdAt: "14:30 20.02.2026",
    address: "Санкт-Петербург, Невский пр., 25",
  },
  {
    id: 3,
    name: "Прогресс",
    email: "hello@progress.ru",
    phone: "+7 (843) 345-67-89",
    status: "active",
    createdAt: "09:45 19.03.2026",
    address: "Казань, ул. Баумана, 15",
  },
  {
    id: 4,
    name: "Спартак",
    email: "info@spartak.ru",
    phone: "+7 (861) 456-78-90",
    status: "active",
    createdAt: "16:20 25.03.2026",
    address: "Краснодар, ул. Красная, 5",
  },
  {
    id: 5,
    name: "Динамо",
    email: "contact@dynamo.ru",
    phone: "+7 (383) 567-89-01",
    status: "inactive",
    createdAt: "11:05 01.04.2026",
    address: "Новосибирск, пр. Димитрова, 8",
  },
  {
    id: 6,
    name: "Русарс",
    email: "support@rusars.ru",
    phone: "+7 (495) 678-90-12",
    status: "active",
    createdAt: "08:30 05.04.2026",
    address: "Москва, ул. Тверская, 20",
  },
];