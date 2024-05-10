document.getElementById('calculateBtn').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers.');
    return;
  }

  const result = num1 + num2;
  document.getElementById('result').innerText = `Result: ${result}`;
});
