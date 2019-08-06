import JP3 from '../../src/woman/jp3';

describe('JP3 woman', function () {
  it('calculate', function () {
    let result = JP3.calculate(5, 5, 5, 30);
    expect(result.toFixed(2)).toBe("7.93");
  });
});