import JP3 from '../src/jp3';

describe('JP3', function () {
  it('calculate', function () {
    let result = JP3.calculate(1, 2, 3);
    expect(result).toBe(6);
  });
});