document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.buttons button'));
    const clearButton = document.getElementById('clear');
    const calculateButton = document.getElementById('calculate');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const buttonText = button.textContent;
        display.value += buttonText;
      });
    });
  
    clearButton.addEventListener('click', function() {
      display.value = '';
    });
  
    calculateButton.addEventListener('click', function() {
      const expression = display.value;
      const operands = expression.split(/[+\-*/]/g);
      const operator = expression.match(/[+\-*/]/)[0];
  
      if (operands.length === 2) {
        const operand1 = parseFloat(operands[0]);
        const operand2 = parseFloat(operands[1]);
  
        if (operator === '+') {
          display.value = operand1 + operand2;
        } else if (operator === '-') {
          display.value = operand1 - operand2;
        } else if (operator === '*') {
          display.value = operand1 * operand2;
        } else if (operator === '/') {
          display.value = operand1 / operand2;
        }
      } else {
        display.value = 'Error';
      }
    });
  });
  