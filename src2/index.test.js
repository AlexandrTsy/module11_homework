import { getMonth } from "./index.js";

describe("month test", () => {
  it("should return name of the month ", () => {
    expect(getMonth(1)).toBe("январь");
    expect(getMonth("1")).toBe("январь");
  });
  it("should return invalid type of input value", () => {
    expect(getMonth("abc")).toBe("Должно быть введено число");
  });
  it("should return invalid input value", () => {
    expect(getMonth(-1)).toBe("Число должно быть положительным");
    expect(getMonth(0)).toBe("ОШИБКА");
    expect(getMonth(15)).toBe("Всего 12 месяцев");
  });
});