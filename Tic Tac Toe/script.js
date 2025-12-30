let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const resetgame = () => {
  turnO = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (Winner) => {
  msg.innerText = `Congratulations,Winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        for (let box of boxes) {
          box.disabled = true;
        }
        showWinner(pos1Val);
      }
    }
  }
};
newbtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
