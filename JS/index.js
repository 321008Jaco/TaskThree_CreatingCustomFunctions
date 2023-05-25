function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Invalid input');
      return;
    }
  
    if (operation === 'plus') {
      result = num1 + num2;
    } else if (operation === 'minus') {
      result = num1 - num2;
    } else if (operation === 'times') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      if (num2 === 0) {
        console.log('Cannot divide by 0');
        return;
      }
      result = num1 / num2;
    }
  
    console.log('Result: ' + result);
  }