//1) 31/01/2024 

var players = [
    {
        nome: "vi",
        ataque: "100",
        defesa: "80",
        skin: ""
    },
    {
        nome: "lux",
        ataque: "90",
        defesa: "50",
        skin: "Cosmos Negro"
    },
    {
	    nome: "Garen",
	    ataque: "150",
	    defesa: "105",
	    skin: ""
	}
];


players.push({nome: "soraka",
              ataque: "55",
              defesa: "10",
              skin: "Guardiã Estelar"
});

players.push({nome: "janna",
              ataque: "50",
              defesa: "15",
              skin: "Previsão do Tempo"});



//2)


for(var i = 0; i<players.length; i++){
  
    if(players[i].skin==""){
       players[i].skin = "sem skin";
    }

    console.log(`${players[i].nome} ${players[i].skin}`);


}

//3)

var maior = 0;

for(var y = 0; y<players.length; y++){
   
    if(players[y].ataque > maior){
        maior = parseInt(players[y].ataque);
    }

    
}

console.log(maior);

//4)

var menor = maior;

for(var j = 0; j<players.length; j++){
   
    if(players[j].defesa < menor){
        menor = parseInt(players[j].defesa);
    }

    
}

console.log(menor);

//5)

var playersPobres = [];

for(var k = 0; k<players.length; k++){

    if(players[k].skin=="sem skin"){
    playersPobres.push(players[k]);
    }
       
}


//6)

var playersRicos = [];

for(var l = 0; l<players.length; l++){

    if(players[l].skin!="sem skin"){
    playersRicos.push(players[l]);
    }
       
}






