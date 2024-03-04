//1)

var lol = `13`;

lol = parseInt(lol);



//2)


var numero = 0;
var resultado = 0;

numero = prompt("Digite um número");



if (numero % 2 == 0) {
    resultado = numero / 2;
    console.log(`O numero é par ${resultado}`);
}

if (numero % 2 != 0) {
    resultado = numero / 2;
    console.log(`O numero é impar ${resultado}`);
}

//3)-4)

var acertos = 0;
var erros = 0;

var perguntas = {
    pergunta1: {
        enunciado: "O Brasil é um Pais",
        resposta: "v"
    },
    pergunta2: {
        enunciado: "Girafa é um país",
        resposta: "f"
    },
    pergunta3:{
        enunciado: "Quanto é 2 + 2? A resposta é 10",
        resposta: "f"
    }
}

var resposta1 = prompt(perguntas.pergunta1.enunciado);

if (resposta1 == perguntas.pergunta1.resposta) {
    console.log("Resposta correta");
    acertos = acertos + 1;
} else {
    console.log("Resposta errada");
    erros = erros + 1;
}

var resposta2 = prompt(perguntas.pergunta2.enunciado);

if (resposta2 == perguntas.pergunta2.resposta) {
    console.log("Resposta correta");
    acertos = acertos + 1;
} else {
    console.log("Resposta errada");
    erros = erros + 1;
}

var resposta3 = prompt(perguntas.pergunta3.enunciado);

if (resposta3 == perguntas.pergunta3.resposta) {
    console.log("Resposta correta");
    acertos = acertos + 1;
} else {
    console.log("Resposta errada");
    erros = erros + 1;
}

console.log(`Você acertou ${acertos} e errou ${erros}`);

//5) 

var dataAtual = new Date();

var dia = dataAtual.getDate().toString().padStart(2, '0');
var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // getMonth() retorna um valor de 0 a 11, então adicionamos 1 para obter o mês correto
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours().toString().padStart(2, '0');
var minutos = dataAtual.getMinutes().toString().padStart(2, '0');

var dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;


var resultado1 = document.getElementById("resultado");

resultado1.innerHTML = `Você acertou ${acertos} e errou ${erros} 
${dataFormatada}`;


//6)

