function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let condicao;

    if (imc < 18.5) {
        condicao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        condicao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        condicao = 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        condicao = 'Obeso';
    } else {
        condicao = 'Obesidade Grave';
    }

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Condição: ${condicao}`);
}

calcularIMC(70, 1.75);
