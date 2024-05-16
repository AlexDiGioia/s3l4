const totCells =72

//const shuffled = [];

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

//createCells(72)

btnClickShuffle= event=>{
  event.preventDefault()
  const bingo = document.getElementById("bingo");
  const shuffled=bingo.children;
  const index=Math.floor(Math.random() * 72)+1;
  shuffled[index].style.backgroundColor=	"red";
}

const shuffleBtn = document.getElementById("shuffle");

shuffleBtn.addEventListener("click", btnClickShuffle);
console.log("saaaaaaaaaaas")


window.addEventListener("DOMContentLoaded",()=>{
  createCells(totCells);

})

