// JavaScript source code
document.getElementById('form-trapezio').addEventListener('submit', function (event) {
    event.preventDefault();

    const baseMaior = parseFloat(document.getElementById('base-maior').value);
    const baseMenor = parseFloat(document.getElementById('base-menor').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const area = ((baseMaior + baseMenor) * altura) / 2;
    document.getElementById('resultado').textContent = `Área do trapézio: ${area.toFixed(2)} unidades quadradas`;
});
