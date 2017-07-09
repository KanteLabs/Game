//Global Variables
const firstVal = /[0 3 6]/g;
const middleVal = /[1 4 7]/g;
const finalVal = /[2 5 8]/g;
const row1 = /[0 1 2]/g;
const row2 = /[3 4 5]/g;
const row3 = /[6 7 8]/g;
const leftToRight = /[0 4 8]/g;
const rightToLeft = /[2 4 6]/g;

let counter = 0;
let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']

    /* 
          0 1 2  
       0 [0,1,2]
       1 [3,4,5]
       2 [6,7,8]
    */
];

window.onload = (() => {
    console.log("Game Ready");
    startGame();
})

function startGame(){
    addClicks();
}

//Adds a click event for every tile on the game-board
function addClicks(){
    document.querySelectorAll('.tile').forEach(function(item){
        item.setAttribute('onclick', 'clickEvent(event)');
    })
}

//This function is called every time a user clicks on a tile
function clickEvent(event){
    let id = event.target.id;
    let item = document.getElementById(id);

    if(event.target.className === "tile"){
        console.log(`Tile ${id} was clicked`);

        if(counter%2 === 0 && counter !== 9){
            if(id<=2){
                gameBoard[0][id] = 'x';
                item.innerHTML += (`<p>x</p>`);
                item.className = "tile clicked";
                counter++;
                console.log(gameBoard[0]);
                checkScore(id);
            }else if(id>2 && id<=5){
                gameBoard[1][id-3] = 'x';
                item.innerHTML += (`<p>x</p>`);
                item.className = "tile clicked";
                counter++;
                console.log(gameBoard[1]);
                checkScore(id);
            }else if(id>5 && id<=8){
                gameBoard[2][id-6] = 'x';
                item.innerHTML += (`<p>x</p>`);
                item.className = "tile clicked";
                counter++;
                console.log(gameBoard[2]);
                checkScore(id);
            }
        }else if(counter%2 !== 0 && counter !== 9){
            if(id<=2){
                gameBoard[0][id] = 'o';
                item.innerHTML += (`<p>o</p>`);
                item.className = "tile clicked";
                counter++;
                console.log(gameBoard[0]);
                checkScore(id);
            }else if(id>2 && id<=5){
                gameBoard[1][id-3] = '0';
                item.innerHTML += (`<p>o</p>`);
                item.className = "tile clicked";
                counter++;
                console.log(gameBoard[1]);
                checkScore(id);
            }else if(id>5 && id<=8){
                gameBoard[2][id-6] = 'o';
                item.innerHTML += (`<p>o</p>`);
                item.className = "tile clicked";
                counter++;
                console.log(gameBoard[2]);
                checkScore(id);
            }
        }//Ends the game if board gets full 
        if(counter === 9){
            console.log('No more moves available');
            counter = 0;
            // location.reload()
        }
    }else {
        console.log("Choose another tile")
    }
}

//This function is called on every event click to see if a player has won the game.
function checkScore(id){
    if(id===4){
        crossCheck(id);
    }
    if(`${id}`.match(firstVal)){
       if(gameBoard[id] === gameBoard[id+1] && gameBoard[id+1] === gameBoard[id+2]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else if(gameBoard[id]==='o'){
            console.log('Player 2 won')
        }
       }else if(gameBoard[id] === gameBoard[3] && gameBoard[3] === gameBoard[6]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else{
            console.log('Player 2 won')
        }
       }
    }else if(`${id}`.match(middleVal)){
        if(gameBoard[id] === gameBoard[id+1] && gameBoard[id+1] === gameBoard[id-1]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else if(gameBoard[id]==='o'){
            console.log('Player 2 won')
        }
       }else if(gameBoard[id] === gameBoard[4] && gameBoard[4] === gameBoard[7]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else{
            console.log('Player 2 won')
        }
       }
    }else if(`${id}`.match(finalVal)){
        if(gameBoard[id] === gameBoard[id-1] && gameBoard[id-1] === gameBoard[id-2]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else if(gameBoard[id]==='o'){
            console.log('Player 2 won')
        }
       }else if(gameBoard[id] === gameBoard[5] && gameBoard[5] === gameBoard[8]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else{
            console.log('Player 2 won')
        }
       }
    }
}

//Function to check for left to right or right to left possible moves on the board
function crossCheck(id){
    
}
