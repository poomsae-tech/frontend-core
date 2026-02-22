import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ComplaintsPage } from "@/features/complaints/complaints-page";

function renderPage() {
  return render(
    <MemoryRouter>
      <ComplaintsPage />
    </MemoryRouter>,
  );
}

describe("ComplaintsPage", () => {
  it("отображает заголовок страницы", () => {
    renderPage();
    expect(screen.getByText("Жалобы")).toBeInTheDocument();
  });

  it("отображает заголовки колонок", () => {
    renderPage();
    expect(screen.getByText(/организация/i)).toBeInTheDocument();
    expect(screen.getByText(/тема/i)).toBeInTheDocument();
    expect(screen.getByText(/дата/i)).toBeInTheDocument();
    expect(screen.getByText(/статус/i)).toBeInTheDocument();
  });

  it("отображает строки с данными", () => {
    renderPage();
    expect(screen.getAllByText("Русарс").length).toBeGreaterThan(0);
    expect(screen.getByText("Олимп")).toBeInTheDocument();
  });

  it("отображает статусы жалоб", () => {
    renderPage();
    expect(screen.getAllByText("На рассмотрении").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Отклонена").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Решена").length).toBeGreaterThan(0);
  });
});
