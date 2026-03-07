import { CustomDataTable } from "@/components/custom-data-table";
import { COMPLAINTS_COLUMNS, MOCK_COMPLAINTS } from "./complaints-columns";
import { PageHeader } from "@/components/page-header";

export function ComplaintsPage() {
  return (
    <div className="container mx-auto pb-12">
      <PageHeader title="Жалобы" showBack backTo="/admin" />

      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        <CustomDataTable columns={COMPLAINTS_COLUMNS} data={MOCK_COMPLAINTS} />
      </div>
    </div>
  );
}
