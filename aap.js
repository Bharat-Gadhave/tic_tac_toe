let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-button");
let massageContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    massageContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    massageContainer.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "Blue";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "Green";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDrow();
        }
    });
});

const gameDrow = () => {
    msg.innerText  = `Game was drow !!!!`;
    massageContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1value = boxes[patterns[0]].innerText;
        let pos2value = boxes[patterns[1]].innerText;
        let pos3value = boxes[patterns[2]].innerText;

        if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showWinner(pos1value);
            }

        }
    }

}
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);