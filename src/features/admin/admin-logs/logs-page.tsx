import { CustomDataTable } from "@/components/custom-data-table";
import { PageHeader } from "@/components/page-header";
import { LOGS_COLUMNS, MOCK_LOGS } from "./logs-columns";

export function LogsPage() {
  return (
    <div className="container mx-auto pb-12">
      <PageHeader title="Логи" showBack backTo="/admin" />

      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        <CustomDataTable columns={LOGS_COLUMNS} data={MOCK_LOGS} />
      </div>
    </div>
  );
}