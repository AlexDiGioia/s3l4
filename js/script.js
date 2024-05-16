//const totCells =72
const createCells = (totCells) => {
  const bingo = document.getElementById("bingo");

  for (let i = 0; i < totCells; i++) {

    const numberCell=document.createElement("div")
    numberCell.classList.add("number");

    const numberCellContent=document.createElement("h3")
    numberCellContent.innerText=i+1;

    numberCell.appendChild(numberCellContent);



    bingo.appendChild(numberCell);
  }

  
};
createCells(72)