//1) 01/02/2024



var players = [
    {
        nome: "vi",
        ataque: "100",
        defesa: "80",
        skin: "",
        frases:[
	        "Vou acabar com você",
	        "Estou sentindo que vou ganhar tudo!",
	        "Nunca desista dos seus sonhos"
        ],
        habilidade:[{
	        nome:"Super Soco",
	        dano:"55",
	        efeito:"ativo"
        },
        {
	        nome:"Cura Mágica",
	        dano:"13",
	        efeito:"passivo"
        }]
    },
    {
        nome: "lux",
        ataque: "90",
        defesa: "50",
        skin: "Cosmos Negro",
        frases:[
	        "Destruição final",
	        "Estou linda hoje... pronta para te bater",
	        "Sempre podemos ser melhores pessoas para Amácia"
        ],
        habilidade:[{
	        nome:"Destruição Final",
	        dano:"90",
	        efeito:"ativo"
        },
        {
	        nome:"Cura Mágica dos Cosmos",
	        dano:"80",
	        efeito:"passivo"
        }]
    },
    {
	    nome: "Garen",
	    ataque: "150",
	    defesa: "105",
	    skin: "",
        frases:[
	        "Por Amácia!",
	        "Minha irmã é mais forte do que eu",
	        "A minha espada trará paz e justiça para o mundo!"
        ],
        habilidade:[{
	        nome:"Espada giratória",
	        dano:"105",
	        efeito:"passivo"
        },
        {
	        nome:"Espada na cabeça",
	        dano:"150",
	        efeito:"ativo"
        }]
	}
];


players.forEach(function(frases){

   frases.frases.push("Pela vida")
   console.log(`${frases.nome} ${frases.frases}`)

});

//2)


var maior = 0;

players.forEach(function(hab){

    hab.habilidade.forEach(function(dano){
        if(dano.efeito=="ativo"){
            if(dano.dano > maior){
                maior = parseInt(dano.dano);
            }
        }
    });

    });

 console.log(maior);


 //3)


 var maior1 = 0;

players.forEach(function(hab){

    hab.habilidade.forEach(function(dano){
        if(dano.efeito=="passivo"){
            if(dano.dano > maior1){
                maior1 = parseInt(dano.dano);
            }
        }
    });

    });

 console.log(maior1);

 var menor = maior1;

players.forEach(function(hab){
    
        hab.habilidade.forEach(function(força){
           
            if(força.efeito=="passivo"){
                if(força.dano < menor){
                    menor = parseInt(força.dano);
                }
            }
        });
    
        });

        console.log(menor);