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

interface CustomDataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

export function CustomDataTable<T>({ columns, data }: CustomDataTableProps<T>) {
  return (
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
  );
}
