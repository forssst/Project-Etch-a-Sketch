const plane = document.querySelector(".plane");
const gridNum = document.querySelector(".gridNum");
const inputVal = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");


btn.addEventListener("click", (e) => {
    console.log(inputVal.value);
    if(inputVal.value > 100 ){
        alert("No more than 100 please")
    } else {
    text.innerHTML = inputVal.value;
    plane.innerHTML = `` 
    let x = inputVal.value * inputVal.value;
    console.log(x)
    // box.style.width = `calc(960 / ${inputVal.value})`;
    for(i = 1; i <= x; i++){
        plane.innerHTML += `<div class="box"></div>`;
       
        
    }

    const box =document.querySelectorAll(".box");
    box.forEach(boxs => {
        boxs.style.width = `calc(100% / ${inputVal.value})`;
         boxs.style.height = `calc(100% / ${inputVal.value})`;
        })
   
}})

  

    


// to ma 16x16 jak valu 16 jest 













