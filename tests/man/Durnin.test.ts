import { DurninMan } from "../../src";

describe("Durnin", () => {
  it("25 old", () => {
    const result = DurninMan.calculate(5, 6, 7, 8, 25);
    expect(result.toFixed(2)).toBe("11.03");
  });
  it("35 old", () => {
    const result = DurninMan.calculate(6, 16, 17, 8, 35);
    expect(result.toFixed(2)).toBe("20.87");
  });
  it("45 old", () => {
    const result = DurninMan.calculate(7, 26, 7, 18, 45);
    expect(result.toFixed(2)).toBe("26.62");
  });
  it("55 old", () => {
    const result = DurninMan.calculate(8, 26, 10, 18, 55);
    expect(result.toFixed(2)).toBe("29.71");
  });
  it("error - 15 old", () => {
    expect(() => { DurninMan.calculate(5, 6, 7, 8, 15)}).toThrowError();
  });
});
