import JP3 from '../../src/man/jp3';

describe('JP3 Man', function () {
  it('calculate', function () {
    let result = JP3.calculate(5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("4.29");
  });
});