window.onload = (() => {
    console.log("Game Ready");
    startGame();
})

function startGame(){
    addClicks();
}

function addClicks(){
    document.querySelectorAll('.tile').forEach(function(item){
        item.setAttribute('onclick', 'clickEvent(event)');
    })
}

let counter = 0;
let gameBoard = []
function clickEvent(event){
    let id = event.target.id;
    let item = document.getElementById(id);
    console.log(id);
    if(counter%2 === 0 && counter !== 9){
        counter++;
        item.className += " clickedX";
        item.innerHTML += (`<p>x</p>`);
        gameBoard[id] = 'x';
        console.log(gameBoard);
        console.log(counter);
    }else if(counter%2 !== 0 && counter !== 9){
        counter++;
        item.className += " clickedO";
        item.innerHTML += (`<p>o</p>`);
        console.log(counter);
        gameBoard[id] = 'o';
        console.log(gameBoard);
    } 
    if(counter === 9){
        console.log('No more moves available');
        counter = 0;
        // location.reload()
    }else if(gameBoard[0] === gameBoard[1] && gameBoard[2] === gameBoard[1]){
       if(gameBoard[0]==='x'){
           console.log('Player 1 won')
       }else if(gameBoard[0]==='o'){
           console.log('Player 2 won')
       }
    }
}