(function(window,document){
'use strict';


var listGames=[];
var selectedGame;
//var ListOfGames = getElementAttributes('[class=list-of-games]');



function getElementAttributes(attributes){
    return document.querySelector(attributes);
}


function initialGameSelect(){
    document.querySelector('[class="game-choose-button"]').click();
  }


  
const getGames = async () => {
    let response = await fetch("games.json");
    let values = await response.json();
    listGames.push(values);
    ////////////
    capeta_exite();
}

getGames();

function capeta_exite(){
    
listGames[0].types.map((game)=>{

    var teste=document.createElement('h3');
    teste.innerText=game.description;
    var description=document.querySelector('[class="game-description"]')
    description.appendChild(teste);

})
}

// teste();



function teste(){
    try {
        console.log(listGames);
    
    } catch (error) {
        console.log("erro");   
    }
}

function selectedGame(gameName){
    selectedGame = listGames[0].filter(game => game.type === gameName);
}

function addDescription(){
    var gameDescription = getElement('[class="game-description"]');
    var gameName = getElement('[class="game-bet-text"]');
    gameDescription.innerHTML = selectedGame[0].description;
    gameName.innerHTML = selectedGame[0].type;

}



})(window,document);