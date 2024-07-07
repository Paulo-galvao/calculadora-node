const prompt = require("prompt-sync")({ sigint: true });

let num1;
let num2;

while(true) {
    console.log(`-------------------------------------------
Qual a operação matemática a ser realizada?
1 - adição
2 - subtração
3 - multiplicação
4 - divisão
5 - porcentagem
0 - sair
-------------------------------------------`);

    const operador = prompt();

    if(operador == 1) {
        
        while(true) {
            num1 = +prompt("Digite o primeiro número: ");
            num2 = +prompt("Digite o segundo número: ");
            
            if(isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, digite apenas números!");                               
            } else {
                console.log(`A soma entre ${num1} e ${num2} é ${somar(num1, num2)}`);
                break;
            }
        }
        
        
    } else if(operador == 2) {

        while(true) {

            num1 = +prompt("Digite o primeiro número: ");
            num2 = +prompt("Digite o segundo número: ");
            if(isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, digite apenas números!");
                
            } else {
                console.log(`A subtração entre ${num1} e ${num2} é ${subtrair(num1, num2)}`);
                break;
            }    
            
        }
        
    } else if(operador == 3) {

        while(true) {
            
            num1 = +prompt("Digite o primeiro número: ");
            num2 = +prompt("Digite o segundo número: ");
            if(isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, digite apenas números!");
                
            } else {
                console.log(`A multiplicação entre ${num1} e ${num2} é ${multiplicar(num1, num2)}`);
                break;
            }    
            
        }

    } else if(operador == 4) {
        while(true) {
            
            num1 = +prompt("Digite o primeiro número: ");
            num2 = +prompt("Digite o segundo número: ");
            if(isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, digite apenas números!");
                
            } else if(num2 === 0) {
                console.log("Não é possível dividir por 0!");
            } else {
                console.log(`A divisão entre ${num1} e ${num2} é ${dividir(num1, num2).toFixed(2)}`);
                break;
            }    
            
        }
    } else if(operador == 5) {
        while(true) {
            
            num1 = +prompt("Digite o primeiro número: ");
            num2 = +prompt("Digite o segundo número: ");
            if(isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, digite apenas números!");
                
            } else {
                console.log(`${num2}% de ${num1} é ${aplicarPorcentagem(num1, num2)}`);
                break;
            }    
            
        }
    } else if(operador == 0) {
        console.log("Obrigado! Até mais :)");
        break;
    } else {
        console.log("Não encontramos a opção escolhida! Por favor tente novamente!");
    }

}

function somar(num_a, num_b) {
    return num_a + num_b;
}

function subtrair(num_a, num_b) {
    return num_a - num_b;
}

function multiplicar(num_a, num_b) {
    return num_a * num_b;
}

function dividir(num_a, num_b) {
    return num_a / num_b;
}

function aplicarPorcentagem(num_a, num_b) {
    return num_a * (num_b/ 100);
}