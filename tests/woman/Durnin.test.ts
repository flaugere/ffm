import { DurninWoman } from "../../src";

describe("Durnin", () => {
  it("25 old", () => {
    const result = DurninWoman.calculate(5, 6, 7, 8, 25);
    expect(result.toFixed(2)).toBe("17.67");
  });
  it("35 old", () => {
    const result = DurninWoman.calculate(6, 16, 17, 8, 35);
    expect(result.toFixed(2)).toBe("27.51");
  });
  it("45 old", () => {
    const result = DurninWoman.calculate(7, 26, 7, 18, 45);
    expect(result.toFixed(2)).toBe("32.75");
  });
  it("55 old", () => {
    const result = DurninWoman.calculate(8, 26, 10, 18, 55);
    expect(result.toFixed(2)).toBe("36.11");
  });
  it("error - 15 old", () => {
    expect(() => { DurninWoman.calculate(5, 6, 7, 8, 15)}).toThrowError();
  });
});
