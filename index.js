let submit = document.getElementById("submit");
submit.addEventListener("click", guessTheNum);
let win = 0;
let loss = 0;
let score = 0;

let msg = document.getElementById("msg_box");
let win_streak = document.getElementById("w_c");
let lose_streak = document.getElementById("l_c");
let score_card = document.getElementById("score");
let screen = document.getElementById("screen");

function guessTheNum() {
  let userNum = +document.getElementById("user_input").value;
  let systemNum = Math.random() * 100;
  systemNum = Math.round(systemNum);
  console.log(systemNum);

  // comparing the two value

  if (userNum === systemNum) {
    msg.innerText = "corect !";
    msg.style.color = "green";
    win = win + 1;
    score = score + 100;
    win_streak.innerText = win;
    score_card.innerText = score;
  } else {
    msg.innerText = "wrong !";
    msg.style.color = "red";
    loss = loss + 1;
    score = score - 100;
    lose_streak.innerText = loss;
    score_card.innerText = score;
  }
  screen.innerText = systemNum;
  screen.style.backgroundColor = "#fff";
  setTimeout(() => {
    msg.innerText = null;
    document.getElementById("user_input").value = null;
    screen.innerText = null;
    screen.style.backgroundColor = "#555555";
  }, 500);
}
