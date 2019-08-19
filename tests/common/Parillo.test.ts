import { Parillo } from '../../src';

describe('Parillo', function () {
  it('calculate', function () {
    let result = Parillo.calculate(5, 5, 5, 5, 5, 5, 5, 5, 5, 80);
    expect(result.toFixed(2)).toBe("6.89");
  });
});