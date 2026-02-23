import { CustomDataTable } from "@/components/custom-data-table";
import { COMPLAINTS_COLUMNS, MOCK_COMPLAINTS } from "./complaints-columns";

export function ComplaintsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CustomDataTable
        title="Жалобы"
        columns={COMPLAINTS_COLUMNS}
        data={MOCK_COMPLAINTS}
        backTo="/admin"
      />
    </div>
  );
}
