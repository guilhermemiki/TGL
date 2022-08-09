(function(window,document){
'use strict';


var listGames=[];
var selectedGame;
var $divListGames = getElementAttributes('[class=list-of-games]');


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


    gameDescription();
    createGamesListButtons()
}

getGames();

function gameDescription(){
    
listGames[0].types.map((game)=>{

    var descr=document.createElement('h3');
    descr.innerText=game.description;
    var description=document.querySelector('[class="game-description"]');
    
    description.appendChild(descr);

})
}

function createGamesListButtons() {

    listGames[0].types.map((game) => {
      var newButton = document.createElement('button');
      var newButtonText = document.createTextNode(game.type);
      newButton.appendChild(newButtonText);


      newButton.setAttribute('class', 'game-choose-button');
      newButton.setAttribute('game-type', game.type);
    

      newButton.style.border = `solid ${game.color}`;
      newButton.style.color = game.color;
      
      $divListGames.appendChild(newButton);
    })
 
  }






})(window,document);