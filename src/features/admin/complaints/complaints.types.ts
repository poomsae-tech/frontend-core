export type ComplaintStatus = "На рассмотрении" | "Отклонена" | "Решена";

export interface Complaint {
  id: number;
  organization: string;
  avatar?: string;
  topic: string;
  date: string;
  status: ComplaintStatus;
}
