(function(window,document){


var listGames=[];

function getElementAttributes(attributes){
    return document.querySelector(attributes);
}




function getGames(){
    var request = new XMLHttpRequest();
    request.open('GET', games.json);
    request.responseType = 'json';
    request.send();

    request.onreadystatechange = ()=>{
        if(request.readyState==4 && request.status === 200){
            listGames.push(JSON.parse(request.responseText).types);
            
        }
    }
}

})(window,document);