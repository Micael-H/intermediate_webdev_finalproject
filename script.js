function calculateInterest(principalInput, rateInput, yearsInput) {
  const principal = Number(principalInput);
  const rate = Number(rateInput);
  const years = Number(yearsInput);

  if (!Number.isFinite(principal) || !Number.isFinite(rate) || !Number.isFinite(years) ||
      principal <= 0 || rate < 0 || years < 0) {
    throw new RangeError('Informe um capital positivo, uma taxa e um prazo não negativos.');
  }

  const interest = Math.round((principal * rate * years / 100 + Number.EPSILON) * 100) / 100;
  return { interest, total: Math.round((principal + interest + Number.EPSILON) * 100) / 100 };
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('interest-form');
  const interestResult = document.getElementById('interest-result');
  const totalResult = document.getElementById('total-result');
  const errorMessage = document.getElementById('error');

  if (form && interestResult && totalResult && errorMessage) {
    const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      try {
        const { interest, total } = calculateInterest(
          form.elements.principal.value,
          form.elements.rate.value,
          form.elements.years.value
        );
        interestResult.textContent = currency.format(interest);
        totalResult.textContent = currency.format(total);
        errorMessage.hidden = true;
        errorMessage.textContent = '';
      } catch (error) {
        interestResult.textContent = '—';
        totalResult.textContent = '—';
        errorMessage.textContent = error.message;
        errorMessage.hidden = false;
      }
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = { calculateInterest };
}
