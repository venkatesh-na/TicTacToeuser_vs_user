localStorage.removeItem("isTrue")
let allDiv = document.querySelectorAll(".main_board > div")
const p = document.querySelector(".winner_board > p")
const winnerBoard = document.querySelector(".winner_board")
const button = document.querySelector("button")

let board = []

function updateBoard(){
    board  = []
    allDiv = document.querySelectorAll(".main_board > div")
    let arr = [...allDiv]
    let newArray = []
    for(let i = 1; i<arr.length+1; i++){
        if(i % 3 === 0){
            newArray.push(arr[i-1].textContent || null)
            board.push(newArray)
            newArray = []
        } else {
            newArray.push(arr[i-1].textContent || null)
        }
    }
}

function checkWinner(arr){
    
    function checkIsAllFilled(arr){
        let flag = true
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j<arr[i].length; j++){
                if(arr[i][j] == null){
                    flag = false
                    break;
                }
            }
        }
        return flag
    }
    
    if((arr[0][0] == "X" && arr[1][1] === "X" && arr[2][2] === "X") || 
    (arr[2][0] == "X" && arr[1][1] === "X" && arr[0][2] === "X") || 
    (arr[0][0] == "X" && arr[1][0] === "X" && arr[2][0] === "X") || 
    (arr[2][0] == "X" && arr[2][1] === "X" && arr[2][2] === "X") || 
    (arr[0][2] == "X" && arr[1][2] === "X" && arr[2][2] === "X") || 
    (arr[0][0] == "X" && arr[0][1] === "X" && arr[0][2] === "X") ||
    (arr[0][1] == "X" && arr[1][1] === "X" && arr[2][1] === "X") ||
    (arr[1][0] == "X" && arr[1][1] === "X" && arr[1][2] === "X")){
        winnerBoard.classList.remove("hide")
        p.textContent = "X WINS"
    } else if((arr[0][0] == "O" && arr[1][1] === "O" && arr[2][2] === "O") ||
    (arr[2][0] == "O" && arr[1][1] === "O" && arr[0][2] === "O") ||
    (arr[0][0] == "O" && arr[1][0] === "O" && arr[2][0] === "O") ||
    (arr[2][0] == "O" && arr[2][1] === "O" && arr[2][2] === "O") ||
    (arr[0][2] == "O" && arr[1][2] === "O" && arr[2][2] === "O") ||
    (arr[0][0] == "O" && arr[0][1] === "O" && arr[0][2] === "O") ||
    (arr[0][1] == "O" && arr[1][1] === "O" && arr[2][1] === "O") ||
    (arr[1][0] == "O" && arr[1][1] === "O" && arr[1][2] === "O")){
        winnerBoard.classList.remove("hide")
        p.textContent = "O WINS"
    } else if(checkIsAllFilled(arr)){
         winnerBoard.classList.remove("hide")
        p.textContent = "DRAW"
    }
}

function handleRestart(){
    location.reload()
}


allDiv.forEach(div=>{
    div.addEventListener("click",(e)=>{
        if(!div.textContent){
            if(!localStorage.getItem("isTrue")){
                board = []
                div.textContent = "X" 
                div.style.color = "rgb(255, 135, 135)"
                localStorage.setItem("isTrue",true)
                updateBoard()
                checkWinner(board)
            } else if(localStorage.getItem("isTrue")) {
                board = []
                div.textContent = "O"
                div.style.color = "rgb(148, 183, 140)"
                localStorage.removeItem("isTrue")
                updateBoard()
                checkWinner(board)
            }
        }
    })
})

button.addEventListener("click",handleRestart)



// 00 
//    11
//       22

//       02
//     11
// 20

// 00
// 10
// 20

// 20 21 22

// 02
// 12
// 22

// 00 01 02







