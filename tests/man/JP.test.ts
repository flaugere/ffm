import { JP3Man as JP3, JP4Man as JP4, JP7Man as JP7 } from '../../src/index';

describe('JP3', function () {
  it('calculate', function () {
    let result = JP3.calculate(5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("4.29");
  });
});
describe('JP4', function () {
  it('calculate', function () {
    let result = JP4.calculate(5, 5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("4.65");
  });
});
describe('JP7', function () {
  it('calculate', function () {
    let result = JP7.calculate(5, 5, 5, 5, 5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("4.63");
  });
});