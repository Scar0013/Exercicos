function imprimir(Frase) {
    console.log(`$(Frase), Oi pessoa`);
    }
    
alert("Oi pessoa");


function idade() {
    var idade = prompt("Qual a sua idade?");
    if (idade >= 18) {
        alert("Você é maior de idade");
    }
    if (idade < 18) {
        alert("Você é menor de idade");
    }
}

idade();


var salario = 1000;
var bonus = 150;

function subtrair(salario) {
    return salario - 75;
}

salario = subtrair(salario);


function adicionar(salario) {
    return salario + 25;
}

salario = adicionar(salario);

function calcularBonus(salario, bonus) {
    return salario + bonus;
}

alert("Seu salário é: " + calcularBonus(salario, bonus));




//Bonus 


function perguntarAoUsuario () {
    var numero = prompt("Digite um número:");
    return numero;
}

function imprimirTabuada(numero) {
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(`${numero}x${i} = ${resultado}`);
    }
}

var numero = perguntarAoUsuario();
imprimirTabuada(numero);


