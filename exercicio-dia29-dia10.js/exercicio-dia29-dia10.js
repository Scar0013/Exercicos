//1) 29/01/2024

function soma(a, b){
	return a + b;
}

function subtracao(a, b){
	return a - b;
}

function multiplicacao(a, b){
	return a * b;
}

function divisao(a, b){
	return a / b;
}

function imprimir(texto){
	console.log(texto);
}

var numero1   = 0;
var numero2   = 0;
var operacao  = 0;
var resultado = 0;
var i = 0;

while(i>=0){

	operacao = prompt("Qual operação?");
    operacao = parseInt(operacao);
	
	if(operacao==5 || operacao==6){
		i = -2;
	}else{
	
		numero1  = prompt("Digite o número 1:");
		numero2  = prompt("Digite o número 2:");
		
		numero1  = parseInt(numero1);
		numero2  = parseInt(numero2);
		operacao = parseInt(operacao);
	
		// SOMA = 1
		// SUBTRACAO = 2
		// MULTIPLICACAO = 3
		// DIVISAO = 4
		// SAIR = 5
		if(operacao==1){ resultado = soma(numero1, numero2); }
		if(operacao==2){ resultado = subtracao(numero1, numero2); }
		if(operacao==3){ resultado = multiplicacao(numero1, numero2); }
		if(operacao==4){ resultado = divisao(numero1, numero2); }
		
		imprimir(resultado);
	
	} // FINAL DO ELSE

}

//2)


var taboada = 0;

taboada = prompt("Digite o número que quer saber a taboada:");
taboada = parseInt(taboada);
var i = 0;

while(i <= 10){
	var legenda = i + 1;
	console.log(`${taboada} X ${i}: ${taboada * i}`);
    i++;	
}

//3)

var numeros = [2,4,7,34,76,22,23,8,66,66,0];

for(var i = 0; i > numeros.length; i++){

   var atual = numeros[i];
   var proximo = numeros[i+1];
   
   if(atual + 1 == proximo){
      console.log("Você venceu!");

   }else{
      console.log("Você perdeu!");
   }
    
    

}

