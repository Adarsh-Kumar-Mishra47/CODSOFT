let displayValue = '0';

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function operate(operator) {
  if (displayValue !== 'Error') {
    displayValue += operator;
    updateDisplay();
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.textContent = displayValue;
}
