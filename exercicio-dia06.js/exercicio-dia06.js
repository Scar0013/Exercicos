

var funcionarios = {
    funcionario_1: {
        nome: "Michey",
        salario: "1000",
        cargo: "cantor",
        senha: "1234",
    },
    funcionario_2: {
        nome: "Pateta",
        salario: "1200",
        cargo: "palhaço", 
        senha: "0234",
    },
    funcionario_3: {
        nome: "Miney",
        salario: "5000",
        cargo: "recepcionista",
        senha: "1235"
    },
}

var nomeFuncionario = prompt("Quem é o funcionário?");
var senhaFuncionario = prompt("Qual é a senha?");

for (var key in funcionarios) {
    var funcionario = funcionarios[key];
    if (funcionario.nome === nomeFuncionario && funcionario.senha === senhaFuncionario) {
        var info = document.getElementById("info");
        info.innerHTML = `Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`;
        break;
    } 
}