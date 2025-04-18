// JavaScript source code
document.getElementById('form-soma').addEventListener('submit', function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const soma = num1 + num2;
    let resultado;

    if (soma > 20) {
        resultado = soma + 8;
    } else {
        resultado = soma - 5;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
