const plane = document.querySelector(".plane");
const gridNum = document.querySelector(".gridNum");
const inputVal = document.querySelector(".input");
const btn = document.querySelector(".btn");
const clearGridBut = document.querySelector(".clearGridBut")
const box = document.querySelectorAll(".box");
inputVal.value = 16;


function createGrid() {
  if (inputVal.value > 100) {
    alert("No more than 100 please")
  } else {
  let MulGridVal = inputVal.value * inputVal.value;
  for (i = 1; i <= MulGridVal; i++) {
    plane.innerHTML += `<div class="box"></div>`;
  }

  // DIVISING BOXES INTO MATCHING SQUARES
  const box = document.querySelectorAll(".box");
  box.forEach(boxs => {
    boxs.style.width = `calc(100% / ${inputVal.value})`;
    // boxs.style.height = `calc(100% / ${inputVal.value})`;
    /// HOVER
    boxs.addEventListener("mouseover", (e) => {
      console.log(':d')
      e.target.classList.add("hovered")
    })
  })
}
}



function changeGrid() {
  btn.addEventListener("click", () => {
    console.log(inputVal.value);
    plane.innerHTML = ``
    createGrid();
  })
}

function clearGrid(){
  clearGridBut.addEventListener("click", () => {
    console.log('chuj')
    const box = document.querySelectorAll(".box");
    box.forEach(boxs => {
      boxs.classList.remove("hovered")
    })
  })
}




function main() {
  createGrid();
  changeGrid();
  clearGrid();
}

main();







/// GRID CREATION












// to ma 16x16 jak valu 16 jest 













