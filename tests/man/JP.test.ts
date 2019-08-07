import JP3 from '../../src/man/JP3';
import JP4 from '../../src/man/JP4';
import JP7 from '../../src/man/JP7';

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