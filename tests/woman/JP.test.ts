import JP3 from '../../src/woman/JP3';
import JP4 from '../../src/woman/JP4';
import JP7 from '../../src/woman/JP7';

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