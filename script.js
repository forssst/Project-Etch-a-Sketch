const plane = document.querySelector(".plane");
const gridNum = document.querySelector(".gridNum");
const inputVal = document.querySelector(".input");
const btn = document.querySelector(".btn");
const clearGridBut = document.querySelector(".clearGridBut")
const rainbowModeBut = document.querySelector(".rainbowModeBut")
const hovered = document.querySelector('.hovered');
const shadingModeBut = document.querySelector(".shadingModeBut")
const eraserBut = document.querySelector(".eraserBut")
const gridBut = document.querySelector(".gridBut")
inputVal.value = 16;
let rainbowMode = false;
let shadingMode = false;
let eraser = false;
let grid = true;


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
            if (rainbowMode == false && shadingMode == false && eraser == false) {
              e.target.style.background = 'rgba(0, 0, 0, 0.99)'
          } else if (rainbowMode == true && shadingMode == false) {
              e.target.style.background = randomRgbColor();
          } else if (rainbowMode == false && shadingMode == false && eraser == true) {
              let getRgbaString = getComputedStyle(e.target).getPropertyValue('background-color');
              let rgbaAlpha = parseFloat(getRgbaString.split(',')[3])
              let r = parseFloat(getRgbaString.slice(5).split(',')[0])
              let g = parseFloat(getRgbaString.split(',')[1])
              let b = parseFloat(getRgbaString.split(',')[2])

            if (rgbaAlpha > 0) {
              e.target.style.background = `rgba(${r} , ${g}, ${b}, ${rgbaAlpha - 0.1})`
            }
          } else if (rainbowMode == false && shadingMode == true && eraser == false) {
              let getRgbaString = getComputedStyle(e.target).getPropertyValue('background-color');
              let rgbaAlpha = parseFloat(getRgbaString.split(',')[3])

            if (rgbaAlpha < 0.99) {
              e.target.style.background = `rgba(0, 0, 0, ${rgbaAlpha + 0.09})`
            }
          }

         



      })
    })
  }
}


rainbowModeBut.addEventListener("click", () => {
  turnRainbowMode();
  eraser == true ? turnEraser() : null;
  shadingMode == true ? turnShadingMode() : null;
})


shadingModeBut.addEventListener("click", () => {
  turnShadingMode();
  rainbowMode == true ? turnRainbowMode() : null;
  eraser == true ? turnEraser() : null;
})


eraserBut.addEventListener('click', () => {
  turnEraser()
  shadingMode == true ? turnShadingMode() : null;
  rainbowMode == true ? turnRainbowMode() : null;
})

gridBut.addEventListener('click', () => {
  turnGrid()
  
})




function turnRainbowMode() {
  if (rainbowMode == false) {
    rainbowMode = true;
    rainbowModeBut.style.background = 'rgba(95, 236, 39, 0.99)'
  } else if (rainbowMode == true) {
    rainbowMode = false
    rainbowModeBut.style.background = 'rgba(248, 88, 88, 0.99)'
  }
}


function turnShadingMode() {
  if (shadingMode == false) {
    shadingMode = true;
    shadingModeBut.style.background = 'rgba(95, 236, 39, 0.99)'
  } else if (shadingMode == true) {
    shadingMode = false;
    shadingModeBut.style.background = 'rgba(248, 88, 88, 0.99)'
  }
}


function turnEraser() {
  if (eraser == false) {
    eraser = true;
    eraserBut.style.background = 'rgba(95, 236, 39, 0.99)'
  } else if (eraser == true) {
    eraser = false;
    eraserBut.style.background = 'rgba(248, 88, 88, 0.99)'
  }
}


function turnGrid() {
  if (grid == false) {
    grid = true;
    gridBut.style.background = 'rgba(95, 236, 39, 0.99)'
  } else if (grid == true) {
    grid = false
    gridBut.style.background = 'rgba(248, 88, 88, 0.99)'
  }

  visableGrid()
  console.log(`gird ${grid}`)
}




clearGridBut.addEventListener("click", () => {
  clearGrid();
})

function changeGrid() {
  btn.addEventListener("click", () => {
    plane.innerHTML = ``
    createGrid();
  })
}

function clearGrid() {
  const box = document.querySelectorAll(".box");
  box.forEach(boxs => {
    boxs.style.background = 'rgba(255, 255, 255, 0)'
  })
}

function visableGrid() {
  const box = document.querySelectorAll(".box");
  box.forEach(boxs => {
      grid == true ? boxs.style.border = '1px solid rgba(255, 255, 255, 0);'   : boxs.style.border = 'none'


    // if (grid == false) {
    //   boxs.style.border = 'none'
    // } else if (grid == true) {
    //   boxs.style.border = '1px solid rgba(255, 255, 255, 0);'
    //   console.log(boxs.style.border)
    // }
  })

}



function randomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = 0.99;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};


function main() {
  createGrid();
  changeGrid();
  clearGrid();

}

main();

////////////////////// CO ZOSTAŁO
// /// co zostało
// wygląd trzeba ogarnąc
// cieniowaine v/
// gumke
// i ogarac czemu takie lagi sa przy zmianie bo u innych nie ma a tak to geet 










