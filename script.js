const plane = document.querySelector(".plane");
const gridNum = document.querySelector(".gridNum");
const inputVal = document.querySelector(".input");
const btn = document.querySelector(".btn");
const clearGridBut = document.querySelector(".clearGridBut")
const rainbowModeBut = document.querySelector(".rainbowModeBut")
const hovered = document.querySelector('.hovered');
const shadingModeBut = document.querySelector(".shadingModeBut")
inputVal.value = 16;
let rainbowMode = false;
let shadingMode = false;


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
      if (rainbowMode == false && shadingMode == false) {
        e.target.style.background = 'rgba(0, 0, 0, 0.99)'
      } else if (rainbowMode == true &&  shadingMode == false) {
        e.target.style.background = randomRgbColor();
      }
      if (shadingMode == true) {
        let x = getComputedStyle(e.target).getPropertyValue('background-color');
        let rgbaAlpha = parseFloat(x.split(',')[3])
        let r = parseFloat(x.slice(5).split(',')[0])
        let g = parseFloat(x.split(',')[1])
        let b = parseFloat(x.split(',')[2])

     
        if(rgbaAlpha < 0.99){
          e.target.style.background = `rgba(0, 0, 0, ${rgbaAlpha + 0.1})`
        }
        
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



shadingModeBut.addEventListener("click", () => {
  if (shadingMode == false) {
    shadingMode = true;
  } else if(shadingMode == true)  {
    shadingMode = false;
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
      boxs.style.background = 'rgba(255, 255, 255, 0)'
    })
}

clearGridBut.addEventListener("click", () => {
  clearGrid();
})

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256); 
  let g = Math.floor(Math.random() * 256); 
  let b = Math.floor(Math.random() * 256);
  let a = 0.99; 
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
};

function shadingColor(r,g,b) {

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










