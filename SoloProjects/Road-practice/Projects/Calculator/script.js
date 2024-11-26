const display = document.getElementById('calc-display'); // Убедитесь, что ID правильный
const buttons = document.querySelectorAll('.buttons button');

let currentInput = ''; // Текущее введённое число
let firstOperand = ''; // Первое число
let operator = ''; // Оператор (+, -, *, /)
let isResultDisplayed = false; // Флаг для проверки, отображается ли результат

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim(); // Получение текста кнопки
    handleButtonClick(value); // Вызов функции обработки
  });
});

function handleButtonClick(value) {
  if (!isNaN(value) || value === '.') {
    // Если нажата цифра или точка
    if (isResultDisplayed) {
      // Если результат отображается, сбрасываем ввод
      currentInput = '';
      isResultDisplayed = false; // Сбрасываем флаг
    }
    currentInput += value;
  } else if (['+', '-', '*', '/'].includes(value)) {
    // Если нажат оператор
    if (currentInput) {
      if (isResultDisplayed) {
        // Если результат отображается, используем его как первое число
        isResultDisplayed = false; // Сбрасываем флаг
      } else {
        firstOperand = currentInput;
      }
      operator = value;
      currentInput = ''; // Очищаем ввод для второго числа
    }
  } else if (value === '=') {
    // Если нажато "="
    if (firstOperand && operator && currentInput) {
      currentInput = calculate(firstOperand, operator, currentInput);
      firstOperand = '';
      operator = '';
      isResultDisplayed = true; // Устанавливаем флаг
    }
  } else if (value === 'AC') {
    // Если нажато "AC" (сброс)
    currentInput = '';
    firstOperand = '';
    operator = '';
    isResultDisplayed = false; // Сбрасываем флаг
  } else if (value === '+/-') {
    // Смена знака числа
    if (currentInput) {
      currentInput = (-parseFloat(currentInput)).toString();
    }
  } else if (value === '%') {
    // Вычисление процента
    if (currentInput) {
      currentInput = (parseFloat(currentInput) / 100).toString();
    }
  }

  updateDisplay(); // Обновляем экран
}

function calculate(first, operator, second) {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);

  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      return num2 !== 0 ? (num1 / num2).toString() : 'Error'; // Проверяем деление на 0
    default:
      return '';
  }
}

function updateDisplay() {
  display.value = currentInput || '0'; // Показываем либо текущее число, либо "0"
}
