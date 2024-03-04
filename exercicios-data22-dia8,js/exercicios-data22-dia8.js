//5)

function tarefachata(max) {
    var impressao = '';
     for (var i = max; i > 0; i--) {
        impressao = impressao + '#';
        for (var j = 0; j < i; j++) {
        console.log(impressao);
        }
 }
 return impressao;
}

tarefachata(5);

//2)- Pq const não muda 


function contrario(contra) {
    var resultado = '';
    for (var i = contra; i > 0; i--) {
        
        for (var j = 0; j < i; j++) {
            resultado = resultado + '#';
    }
    console.log(resultado);
        resultado = '';

    } 

}

contrario(5);




// exemplo Diogenes
function imprimir(num){

    var temporaria = '';

    for(var i = 0; i < num; i++){
        temporaria = temporaria + '#';
    }
    return temporaria;
    
}

function contrarioDiogenes(param){
  
    var impressao = '';

    for(var i = param; i > 0; i--){
        impressao = imprimir(i);
        console.log(impressao);
    }

}

contrarioDiogenes(5);


//3)

const max_alunos = 10;
var   alunos = [];

function pedirNomeAluno(ordem) {
    return prompt(`Digite o nome do aluno ${ordem}`);
}

for (var i = 0; i < max_alunos; i++) {
    var nomeAluno = pedirNomeAluno(i);
    if (nomeAluno) {
        alunos[i] = nomeAluno;
    }
}

function alunosA(){
for (var i = 0; i < max_alunos; i++) { 
	console.log(alunos[i]); 
}
console.log(alunos[i]);
}

alunosA();



const max_alunos = 3;
var   alunos = [];

function pedirNomeAluno(ordem) {
    return prompt(`Digite o nome do aluno ${ordem}`);
}


aluno[0] = pedirNomeAluno(0);
aluno[1] = pedirNomeAluno(1);
aluno[2] = pedirNomeAluno(2);



console.log(alunos[0]); 
console.log(alunos[1]); 
console.log(alunos[2]); 






const helloWorld = console.log
helloWorld('console.log')