const plane = document.querySelector(".plane");
const gridNum = document.querySelector(".gridNum");
const inputVal = document.querySelector(".input");
const btn = document.querySelector(".btn");
const clearGridBut = document.querySelector(".clearGridBut")
const rainbowModeBut = document.querySelector(".rainbowModeBut")
const hovered = document.querySelector('.hovered');
inputVal.value = 16;
let rainbowMode = false;


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
    /// HOVER
    boxs.addEventListener("mouseover", (e) => {
      if (rainbowMode == false) {
        // e.target.classList.add("hoveredBlack")
        e.target.style.background = 'black'
      } else {
        e.target.style.background = randomRgbColor();
      }
     
    })
  })
}
}

rainbowModeBut.addEventListener("click", () => {
  if (rainbowMode == false) {
    rainbowMode = true;
  } else if(rainbowMode == true)  {
    rainbowMode = false
  }
  console.log(rainbowMode)
})



function changeGrid() {
  btn.addEventListener("click", () => {
    console.log(inputVal.value);
    plane.innerHTML = ``
    createGrid();
  })
}

function clearGrid(){
    const box = document.querySelectorAll(".box");
    box.forEach(boxs => {
      boxs.style.background = 'none'
    })
}

clearGridBut.addEventListener("click", () => {
  clearGrid();
})

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

// function turnPenColorRainbow() {
// )}






function main() {
  createGrid();
  changeGrid();
  clearGrid();
  // turnPenColorRainbow();
}

main();







/// GRID CREATION












// to ma 16x16 jak valu 16 jest 













