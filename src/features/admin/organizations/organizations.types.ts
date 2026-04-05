export type OrganizationStatus = "active" | "inactive";

export interface Organization {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: OrganizationStatus;
  createdAt: string;
  address?: string;
}