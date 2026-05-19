let boxes = document.querySelectorAll(".box");
let resBtn = document.getElementById("Res-btn");
let turnx = true;
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.getElementById("new-btn");
let msg = document.getElementById("msg");
const patt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    turnx = true;
    msgContainer.classList.add("hide");
    enableBoxes();
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnx)
        {
            box.innerText = "X";
            turnx = false;
        }
        else
        {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        checkWin();
    });
});
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
};
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
const showWinner = (winner) => {
    msg.innerText = winner + " wins!";
    msgContainer.classList.remove("hide");  
    disableBoxes();
};

const checkWin = () => {
    for(let pattern of patt)
    {
        // console.log(pattern[0], pattern[1], pattern[2] );
        if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[0]].innerText !== "")
        {
            showWinner(boxes[pattern[0]].innerText );
        }
    }
}
newGameBtn.addEventListener("click", resetGame);
resBtn.addEventListener("click", resetGame);
