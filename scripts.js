(function(window,document){
'use strict';


var listGames=[];
var selectedGame;
var ListOfGames = getElementAttributes('[class=list-of-games]');

function getElementAttributes(attributes){
    return document.querySelector(attributes);
}


function initialGameSelect(){
    document.querySelector('[class="game-choose-button"]').click();
  }

function getGames(){
    var request = new XMLHttpRequest();
    request.open('GET', games.json);
    request.responseType = 'json';
    request.send();

    request.onreadystatechange = ()=>{
        if(request.readyState==4 && request.status === 200){
            listGames.push(JSON.parse(request.responseText).types);
            createGamesListButtons();
            initialGameSelect();
        }
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

getGames();
})(window,document);