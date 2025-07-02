const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log('Numero');
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('Operador');
    }

    if (action === 'decimal') {
      console.log('Decimal');
    }

    if (action === 'clear') {
      console.log('Borrar');
    }

    if (action === 'calculate') {
      console.log('Igual');
    }
  }
});

