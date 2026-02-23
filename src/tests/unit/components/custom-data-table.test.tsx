import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  CustomDataTable,
  type ColumnDef,
} from "@/components/custom-data-table";

interface Row {
  id: number;
  name: string;
}

const COLUMNS: ColumnDef<Row>[] = [
  { key: "id", header: "ID", cell: (row) => row.id },
  { key: "name", header: "Имя", cell: (row) => row.name },
];

const DATA: Row[] = [
  { id: 1, name: "Иван" },
  { id: 2, name: "Мария" },
];

function renderTable(data: Row[] = DATA) {
  return render(
    <MemoryRouter>
      <CustomDataTable title="Тест" columns={COLUMNS} data={data} />
    </MemoryRouter>,
  );
}

describe("AdminDataTable", () => {
  it("отображает заголовок", () => {
    renderTable();
    expect(screen.getByText("Тест")).toBeInTheDocument();
  });

  it("отображает заголовки колонок", () => {
    renderTable();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Имя")).toBeInTheDocument();
  });

  it("отображает строки данных", () => {
    renderTable();
    expect(screen.getByText("Иван")).toBeInTheDocument();
    expect(screen.getByText("Мария")).toBeInTheDocument();
  });

  it("отображает сообщение при пустых данных", () => {
    renderTable([]);
    expect(screen.getByText("Нет данных")).toBeInTheDocument();
  });
});
