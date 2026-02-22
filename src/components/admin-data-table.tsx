import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface ColumnDef<T> {
  key: string;
  header: string;
  headerClassName?: string;
  cellClassName?: string;
  cell: (row: T) => React.ReactNode;
}

interface AdminDataTableProps<T> {
  title: string;
  columns: ColumnDef<T>[];
  data: T[];
  backTo?: string;
  className?: string;
}

export function AdminDataTable<T>({
  title,
  columns,
  data,
  backTo,
  className,
}: AdminDataTableProps<T>) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {/* Header */}
      <div className="relative flex items-center justify-center px-6 py-5 border-b">
        <button
          onClick={handleBack}
          className="absolute left-6 flex items-center justify-center w-8 h-8 rounded-md text-primary hover:bg-primary/10 transition-colors"
          aria-label="Назад"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-base font-semibold">{title}</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b">
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={cn(
                  "px-6 text-xs font-semibold tracking-widest uppercase text-muted-foreground",
                  col.headerClassName,
                )}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center text-muted-foreground py-12 text-sm"
              >
                Нет данных
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="border-b last:border-0 hover:bg-muted/40 transition-colors"
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className={cn("px-6 py-3", col.cellClassName)}
                  >
                    {col.cell(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
