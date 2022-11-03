let lotteryOne = `Kake`;
let lotteryTwo = `Sydentur`;
let lotteryThree = `Ett gratis måltid på McDonald's`;
let lotteryFour = `First Price Cookies`;
//4 innhold /\

//random-funksjon
function randomOut(designatedDiv) {
  let svar = "";

  if (designatedDiv.innerHTML != "") return;

  svar = Math.floor(Math.random() * 4) + 1;

  console.log(svar);

  designatedDiv.innerHTML = numberToAnswer(svar);
}

function numberToAnswer(randomNumber) {
  if (randomNumber == 1) {
    return lotteryOne;
  } else if (randomNumber == 2) {
    return lotteryTwo;
  } else if (randomNumber == 3) {
    return lotteryThree;
  } else if (randomNumber == 4) {
    return lotteryFour;
  }
}
