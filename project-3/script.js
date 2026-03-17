let cells = document.querySelectorAll(".cell");
let statusText=
document.getElementById("status");
let currentPlayer = "X";
let gameActive = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach((cell) => {
    cell.addEventListener("click", () =>{
        if(cell.textContent==="" &&gameActive){
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X"?"O":
            "X";
            if(gameActive){
                statusText.textContent = "Player" + currentPlayer + "'s Turn";
            }
        }
    });
    
});

function checkWinner(){
    for(let pattern of winPatterns){
        let [a,b,c] = pattern;

        if(
            cells[a].textContent && cells[a].textContent ===
            cells[b].textContent &&
            cells[a].textContent ===
            cells[c].textContent
        ){
            statusText.textContent = "🎉Player" +
            currentPlayer + "Wins!";
            gameActive = false;
            return;
        }
    }
    let allFilled = [...cells].every(cell => cell.textContent !=="");
    if(allFilled){
        statusText.textContent = "It's a Draw!";
        gameActive = false;
    }
}

function restartGame(){
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X's Turn";
}