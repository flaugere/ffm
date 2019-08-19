import { JP3Woman as JP3, JP4Woman as JP4, JP7Woman as JP7 } from '../../src';

describe('JP3', function () {
  it('calculate', function () {
    let result = JP3.calculate(5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("7.93");
  });
});
describe('JP4', function () {
  it('calculate', function () {
    let result = JP4.calculate(5, 5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("8.06");
  });
});
describe('JP7', function () {
  it('calculate', function () {
    let result = JP7.calculate(5, 5, 5, 5, 5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("9.44");
  });
});