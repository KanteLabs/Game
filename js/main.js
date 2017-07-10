//Global Variables
let score = document.querySelector('.score');
let counter = 0;
let gameBoard = [['','',''],['','',''],['','','']];

window.onload = (() => {
    console.log("Game Ready");
    startGame();
})
//Can be customized to load any necessary functions before the game starts
function startGame(){
    document.querySelector('.menu').style.display = "none";
    addClicks();
    score.querySelector('h2').innerText = ('Game Ready. Player 1 turn.');
}
//Adds a click event for every tile on the game-board
function addClicks(){
    document.querySelectorAll('.tile').forEach((item)=>{
        item.setAttribute('onclick', 'clickEvent(event)');
    })
}
//Runs if a player wins
function removeClicks(){
    document.querySelectorAll('.tile').forEach((item)=>{
        item.setAttribute('onclick', '');
        item.className = "tile";
    })
}
function clearBoard(){
    document.querySelectorAll('.tile').forEach((item)=>{
        item.innerHTML = " "
    })
    gameBoard = [['','',''],['','',''],['','','']];
    counter = 0;
    removeClicks();
    startGame();
}
function updateBoard(item, val, id){
    item.innerHTML += (`<p>${val}</p>`);
    item.className = "tile clicked";
    checkScore(id);
}
//This function is called every time a user clicks on a tile
function clickEvent(event){
    let id = event.target.id;
    let item = document.getElementById(id);
    if(event.target.className === "tile"){
        console.log(`Tile ${id} was clicked`);
        //Updates the board for the 'X' player
        if(counter%2 === 0 && counter !== 9){
            let val = 'x';
            score.querySelector('h2').innerText = ('Player 2 turn.');
            if(id<=2){
                gameBoard[0][id] = val;
                updateBoard(item, val, id);
                counter++;
            }else if(id>2 && id<=5){
                gameBoard[1][id-3] = val;
                updateBoard(item, val, id);
                counter++;
            }else if(id>5 && id<=8){
                gameBoard[2][id-6] = val;
                updateBoard(item, val, id);
                counter++;
            }//Updates the board for the 'o', player
        }else if(counter%2 !== 0 && counter !== 9){
            let val = 'o';
            score.querySelector('h2').innerText = ('Player 1 turn.');
            if(id<=2){
                gameBoard[0][id] = val;
                updateBoard(item, val, id);
                counter++;
            }else if(id>2 && id<=5){
                gameBoard[1][id-3] = val;
                updateBoard(item, val, id);
                counter++;
            }else if(id>5 && id<=8){
                gameBoard[2][id-6] = val;
                updateBoard(item, val, id);
                counter++;
            }
        }//Ends the game if board gets full 
        if(counter === 9){
            score.querySelector('h2').innerText = (`Game is a tie no more moves available`);
            checkScore();
            document.querySelector('.menu').style.display = "block";
        }
    }else { //If player picks a tile thats already chosen
        score.querySelector('h2').innerText = (`That tile is already selected! ${counter%2 === 0 ? 'Player 1' : 'Player 2'} pick another tile!`);
    }
}

//This function is called on every event click to see if a player has won the game.
function checkScore(id){
    let result;
    //Checks for a winner in each row
    gameBoard.map((row)=>{
         result = row.reduce((prev, curr)=>{
            return prev + curr;
        })
        checkWinner(result);
    })
    //Checks for a winner in each column
    for( let i = 0; i < 3; i++){
        result = gameBoard.reduce((prev, curr)=>{
            return prev + curr[i];
        }, 0)
        checkWinner(result);
    }
    //Checks for a winner in diagonals
    if((gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) && gameBoard[1][1] !== ''){
        result = (gameBoard[1][1]).repeat(3)
        checkWinner(result);
    }else if((gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) && gameBoard[1][1] !== ''){
        result = (gameBoard[1][1]).repeat(3)
        checkWinner(result);
    }
}
//Displays a winner based on the value of result
function checkWinner(result){
    result.match('xxx') ? gameOver('Player 1') : result.match('ooo') ? gameOver('Player 2') : null;
}
function gameOver(player){
    score.querySelector('h2').innerText = (`${player} won!`);
    document.querySelector('.menu').style.display = "block";
    removeClicks();
}