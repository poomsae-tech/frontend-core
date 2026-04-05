import { CustomDataTable } from "@/components/custom-data-table";
import { ORGANIZATIONS_COLUMNS, MOCK_ORGANIZATIONS } from "./organizations-columns";
import { PageHeader } from "@/components/page-header";

export function OrganizationsPage() {
  return (
    <div className="container mx-auto pb-12">
      <PageHeader title="Организации" showBack backTo="/admin" />

      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        <CustomDataTable columns={ORGANIZATIONS_COLUMNS} data={MOCK_ORGANIZATIONS} />
      </div>
    </div>
  );
}