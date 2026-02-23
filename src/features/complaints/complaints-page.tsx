import { CustomDataTable } from "@/components/custom-data-table";
import { COMPLAINTS_COLUMNS, MOCK_COMPLAINTS } from "./complaints-columns";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ComplaintsPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
        {/* Header */}
        <div className="relative flex items-center justify-center px-6 py-5 border-b">
          <button
            onClick={() => navigate("/admin")}
            className="absolute left-6 flex items-center justify-center w-8 h-8 rounded-md text-primary hover:bg-primary/10 transition-colors"
            aria-label="Назад"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-semibold">Жалобы</h1>
        </div>
        <CustomDataTable columns={COMPLAINTS_COLUMNS} data={MOCK_COMPLAINTS} />
      </div>
    </div>
  );
}
