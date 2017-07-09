const firstVal = /[0 3 6]/g;
const middleVal = /[1 4 7]/g;
const finalVal = /[2 5 8]/g;

const colVal1 = /[0 1 2]/g;
const colVal2 = /[3 4 5]/g;
const colVal3 = /[6 7 8]/g;

let counter = 0;
let gameBoard = []

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
    console.log(`Tile ${id} was clicked`);

    //This will log a 'x' on the board
    if(counter%2 === 0 && counter !== 9){
        counter++;
        item.innerHTML += (`<p>x</p>`);
        gameBoard[id] = 'x';
        console.log(gameBoard);
        checkScore(id);
    }//This will log a 'o' on the board
    else if(counter%2 !== 0 && counter !== 9){
        counter++;
        item.innerHTML += (`<p>o</p>`);
        gameBoard[id] = 'o';
        console.log(gameBoard);
        checkScore(id);
    }//Ends the game if board gets full 
    if(counter === 9){
        console.log('No more moves available');
        counter = 0;
        // location.reload()
    }
}

//This function is called on every event click to see if a player has won the game.
function checkScore(id){
    if(`${id}`.match(firstVal)){
       if(gameBoard[id] === gameBoard[id+1] && gameBoard[id+1] === gameBoard[id+2]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else if(gameBoard[id]==='o'){
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
       }
    }else if(`${id}`.match(finalVal)){
        if(gameBoard[id] === gameBoard[id-1] && gameBoard[id-1] === gameBoard[id-2]){
        if(gameBoard[id]==='x'){
            console.log('Player 1 won')
        }else if(gameBoard[id]==='o'){
            console.log('Player 2 won')
        }
       }
    }
}