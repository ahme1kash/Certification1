document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".next").style.visibility = "hidden";
  document.querySelector(".reset").style.visibility = "hidden";
  const rule = document.querySelector(".button_div")
  rule.style.right="2em"
  getFromLocal();
});
const contentBox = document.querySelector("#contentBox");
contentBox.style.display = "none";

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  // Toggle the visibility of the content box
  contentBox.style.display = "none";
});
const toggleButton = document.querySelector(".btn_Rule");

toggleButton.addEventListener("click", () => {
  // Toggle the visibility of the content box
  contentBox.style.display =
    contentBox.style.display === "none" ? "block" : "none";
});
const path_scissors = "./images/Scissors.png";
const path_rock = "./images/Rock.png";
const path_paper = "./images/Paper.png";
let count2 = document.querySelector(".user_counter");
let count = document.querySelector(".comp_counter");
let score1 = parseInt(localStorage.getItem("Computer")) || 0;
let score2 = parseInt(localStorage.getItem("User")) || 0;
count.innerText = score1;
count2.innerText = score2;

const img_paths = {
  rock: path_rock,
  paper: path_paper,
  scissors: path_scissors,
};
const img_alt = {
    rock: "rock image",
    paper:"paper image",
    scissors: "scissors image"
}
function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result = declareWinner(userChoice, computerChoice);
  if (result == false) {
    score1 += 1;
    let count = document.querySelector(".comp_counter");
    count.innerText = parseInt(score1);
    localStorage.setItem("Computer", JSON.stringify(score1));
  } else if (result == true) {
    score2 += 1;
    let count2 = document.querySelector(".user_counter");
    count2.innerText = parseInt(score2);
    localStorage.setItem("User", JSON.stringify(score2));
  }

}
function declareWinner(userChoice, computerChoice) {
  let winner = "";
  const res = document.querySelector(".result");
  const comp_choice = document.querySelector(".comp_choice");
  const user_choice = document.querySelector(".user_choice");
  const user = document.querySelector(".user");
  const computer = document.querySelector(".computer");
  user.innerHTML="YOU PICKED"
  computer.innerHTML="PC PICKED"

  user.style.color = "#ffffff"
  user.style.fontWeight = "800"
  user.style.marginTop = "4em"
  computer.style.marginTop = "2.5em"
  computer.style.fontWeight = "800"
  computer.style.color = "#ffffff"
  user_choice.src = img_paths[userChoice];
  comp_choice.src = img_paths[computerChoice];
  user_choice.alt = img_alt[userChoice];
  comp_choice.alt = img_alt[computerChoice];
  res.style.color = '#ffffff'
  res.style.fontWeight = '1000'
  res.style.letterSpacing = '3px'
  res.style.fontSize="2em"
  res.style.marginTop="-1em"
  if (userChoice === computerChoice) {
    res.innerHTML = "TIE UP <pre>\nAGAINST PC"
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    res.innerHTML = "YOU <pre> WIN \nAGAINST PC"
    document.querySelector(".button_div").style.marginRight="6em"
    // document.querySelector(".button_div").style.marginTop="9em"
    document.querySelector(".button_div").style.position="absolute"
    winner = "user";

    if (winner == "user") {
      addNextButton();
    }
  } else {
    res.innerHTML = "YOU <pre> LOST \nAGAINST PC";
    winner = "computer";
  }
  removeGameContainer(winner);
  return winner == "user" ? true : winner == "computer" ? false : null;
}

function removeGameContainer(winner) {
  document.querySelector(".option").style.display = "none";
  let reset = document.querySelector(".reset");
  reset.style.visibility = "visible";
  reset.style.width = "142px";
  reset.style.height = "44px";
  reset.style.border = "none";

  reset.style.cursor = "pointer";
  reset.style.backgroundColor = "#ffffff";
  reset.style.borderRadius = "9px";
  if (winner == "user") {
    reset.innerHTML = "PLAY AGAIN";
  } else {
    reset.innerHTML = "REPLAY";
  }
  reset.style.color = "Grey";
  reset.style.backgroundColor = "White";
  reset.style.marginTop = "-5em";
//   reset.style.Bottom = "-1em";
  reset.style.fontSize = "1.2em";
  reset.style.fontWeight = "900";

//   reset.style.backgroundColor = "#20112e";
  reset.onclick = function () {
    location.reload(true);
  };
}
//   document.write(win)
// document.querySelector('.next').innerText='Next';
function addNextButton() {
  let next = document.querySelector(".next");
  next.style.visibility = "visible";
  next.style.width = "5.9em";
  next.style.height = "2.6em";
  next.innerHTML = "NEXT";
  next.style.color = "White";
  next.style.top = "40.8em";
  next.style.right = "2em";
  next.style.justifyContent = "flex-end";
  next.style.position = "absolute";
  next.style.fontSize = "17px";
  next.style.backgroundColor = "transparent";
  next.style.color = "#ffffff";
  next.style.border = "solid";
  next.style.borderRadius = "5px";
  next.style.cursor = "pointer";
  next.style.boxSizing = "border-box";
  next.style.padding = "5px";
  next.style.fontWeight= "800";
  next.onclick = function () {
    // Reload the current page
    location.href = "./victory.html";
  };
}
function getFromLocal() {
  // Retrieve data from local storage after the page has loaded
  let comp_score = localStorage.getItem("Computer");
  let count = document.querySelector(".comp_counter");
  count.innerText = parseInt(comp_score) || 0;

  let user_score = localStorage.getItem("User");
  let count2 = document.querySelector(".user_counter");
  count2.innerText = parseInt(user_score) || 0;
}
