import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("возвращает одиночный класс", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("объединяет несколько классов", () => {
    expect(cn("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("убирает falsy-значения", () => {
    expect(cn("foo", undefined, null, false, "bar")).toBe("foo bar");
  });

  it("обрабатывает условные классы (объект)", () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe("foo baz");
  });

  it("разрешает конфликты tailwind-классов (последний побеждает)", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("разрешает конфликты при смешивании строк и объектов", () => {
    expect(cn("p-4", { "p-2": true })).toBe("p-2");
  });

  it("возвращает пустую строку при отсутствии аргументов", () => {
    expect(cn()).toBe("");
  });
});
