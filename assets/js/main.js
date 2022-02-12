function calculadora() {
    const operacao = Number(prompt('Escolha uma peração:\n 1: Soma(+)\n 2: Subtração(-)\n 3: Multiplicação(*)\n 4:Divisão real(/)\n 5: Divisão Inteira(%)\n 6: Potenciação(**)'));

    if (!operacao || operacao >= 7) {
        alert('Escolha uma opção valida');
        calculadora();
    } else {

        let num1 = Number(prompt('Insira o primeiro valor:'));
        let num2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        var soma = () => {
            resultado = num1 + num2;
            alert(`${num1} + ${num2} = ${resultado}`);
            novaOperacao();
        }
        var subtracao = () => {
            resultado = num1 - num2;
            alert(`${num1} - ${num2} = ${resultado}`);
            novaOperacao();

        }
        var multiplicacao = () => {
            resultado = num1 * num2;
            alert(`${num1} x ${num2} = ${resultado}`);
            novaOperacao();

        }
        var divisao_real = () => {
            resultado = num1 / num2;
            alert(`${num1} / ${num2} = ${resultado}`);
            novaOperacao();

        }
        var divisao_inteira = () => {
            resultado = num1 % num2;
            alert(`O resto da divisão entre ${num1} e ${num2} é ${resultado}`);
            novaOperacao();

        }
        var potenciacao = () => {
            resultado = num1 ** num2;
            alert(`${num1} elevado a ${num2} é ${resultado}`);
            novaOperacao();

        }

        var novaOperacao = () => {
            let opcao = prompt('Deseja realizar uma nova operação ?\n 1: Sim\n 2: Não');

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Adeus!');
            } else {
                alert('Escolha uma opção valida');
                novaOperacao();
            }
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisao_real();
        } else if (operacao == 5) {
            divisao_inteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }
}
calculadora();

console.log(escopoLocalInterno);