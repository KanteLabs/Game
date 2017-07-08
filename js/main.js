window.onload = (() => {
    console.log("Game Ready");
    startGame();
})
function startGame(){
    addClicks()
}
function addClicks(event){
    document.querySelectorAll('.tile').forEach(function(item){
        item.setAttribute('onclick', 'addClicks(event)')
    })
}