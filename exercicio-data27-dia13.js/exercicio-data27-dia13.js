//  27/02/2024

var personagens; 

fetch('champions.json') 
	.then(response => response.json()) 
	.then(data => { 
        personagens = data; 
        console.log(personagens);
    
        for(var i = 0; i<personagens.length; i++){
  
            console.log(`${personagens[i].id} ${personagens[i].name} ${personagens[i].icon}`);
            //console.log("Fim da promessa");
             
        }
         
    
    })
	.catch(error => console.log('Erro ao ler o arquivo JSON:', error));


    console.log("Fim do código");
  

    
