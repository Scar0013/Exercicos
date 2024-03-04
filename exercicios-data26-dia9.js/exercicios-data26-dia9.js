//1)- Não precisa 

//2)

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
	alert(texto);
}

var numero1   = 0;
var numero2   = 0;
var operacao  = 0;
var resultado = 0;


for(var i = 0; i>=0; i++){

	operacao = prompt("Qual operação?");
	
	if(operacao==5){
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

//3)

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

function porcentagem(a, b){
    return (a * b) / 100;
}

function imprimir(texto){
	alert(texto);
}

var numero1   = 0;
var numero2   = 0;
var operacao  = 0;
var resultado = 0;


for(var i = 0; i>=0; i++){

	operacao = prompt("Qual operação?");
	
	if(operacao==5){
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
		if(operacao==6){ resultado = porcentagem(numero1, numero2); }
		
        imprimir(resultado);
	
	} // FINAL DO ELSE

}

//4)

var numeros = [29, 25, 3, 49, 9, 37, 21, 43, 55];
var tamanho = numeros.length;

var pote1 = []; // SÓ ACEITA NÚMEROS DE 0 A 9
var pote2 = []; // SÓ ACEITA NÚMEROS DE 10 A 19
var pote3 = []; // SÓ ACEITA NÚMEROS DE 20 A 29
var pote4 = []; // SÓ ACEITA NÚMEROS DE 30 A 39
var pote5 = []; // SÓ ACEITA NÚMEROS DE 40 A 49



var pot_pote_1 = 0;
var pot_pote_2 = 0;
var pot_pote_3 = 0;
var pot_pote_4 = 0;
var pot_pote_5 = 0;

for(var i = 0; i<tamanho;i++){

    if(numeros[i]>=0 && numeros[i]<=9){
        pote1[pot_pote_1] = numeros[i];
        pot_pote_1++;
    }
    if(numeros[i]>=10 && numeros[i]<=19){
        pote2[pot_pote_2] = numeros[i];
        pot_pote_2++;
    }
    if(numeros[i]>=20 && numeros[i]<=29){
        pote3[pot_pote_3] = numeros[i];
        pot_pote_3++;
    }
    if(numeros[i]>=30 && numeros[i]<=39){
        pote4[pot_pote_4] = numeros[i];
        pot_pote_4++;
    }
    if(numeros[i]>=40 && numeros[i]<=49){
        pote5[pot_pote_5] = numeros[i];
        pot_pote_5++;
    }
    

}

//5)



function souPalindromo(str) {
    // Removendo caracteres especiais e convertendo para minúsculas
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Obtendo o tamanho da string limpa
    var len = cleanedStr.length;

    // Comparando os caracteres um a um
    for (var i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            // Se os caracteres não coincidirem, não é um palíndromo
            return "NÃO É";
        }  
    }
    // Se todos os caracteres coincidirem, é um palíndromo
    return "É É É";
}



for(var i = 0; i>=0; i++){
    var palavra = prompt("Digite uma palavra:");
    var resposta = souPalindromo(palavra);
    
    if(resposta == "NÃO É"){

    }
    
    if(resposta == "É É É"){
        alert("É palindromo");
        i = -2;
    }
    
}
