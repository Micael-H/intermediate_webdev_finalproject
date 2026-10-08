const { calculateInterest } = require('../src/script');

describe('calculateInterest', () => {
  it('calcula juros simples e total para valores numéricos', () => {
    expect(calculateInterest(1000, 5, 2)).toEqual({ interest: 100, total: 1100 });
  });

  it('converte entradas de texto em números antes do cálculo', () => {
    expect(calculateInterest('1250.50', '4', '2')).toEqual({ interest: 100.04, total: 1350.54 });
  });
});
