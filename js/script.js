const totCells = 72;

const RGBcolor = function () {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  let randomcolor = "rgb(" + R + "," + G + "," + B + ")";
  return randomcolor;
};

const createCells = (totCells) => {
  const bingo = document.getElementById("bingo");

  for (let i = 0; i < totCells; i++) {
    const numberCell = document.createElement("div");
    numberCell.classList.add("number");

    const numberCellContent = document.createElement("h3");
    numberCellContent.innerText = i + 1;

    numberCell.appendChild(numberCellContent);

    bingo.appendChild(numberCell);
  }
};

const shuffleBtn = document.getElementById("shuffle");

btnClickShuffle = (event) => {
  event.preventDefault();
  const bingo = document.getElementById("bingo");
  const shuffled = bingo.children;
  const index = Math.floor(Math.random() * 72) + 1;

  /*const alreadyShuffled=[0];
  shuffled.forEach(element => {
    for(let i=0;i<alreadyShuffled;i++){
      alreadyShuffled.forEach(element2 => {
        if(index===element2)
          alert("Numero già uscito!");
      });
    }
  });*/
  shuffled[index].style.backgroundColor = RGBcolor();
  console.log("saas", randomInteger(255));
  //alreadyShuffled.push(index);
};

shuffleBtn.addEventListener("click", btnClickShuffle);

window.addEventListener("DOMContentLoaded", () => {
  createCells(totCells);
});
