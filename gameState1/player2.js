class Player2{
    constructor(){

    }

    getPlayerName(){
        var playerNameRef = database.ref('players/player/name');
        playerNameRef.on("value",function(data){
          players/player = data.val();
        })  
    }
}