const colors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn =document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomNumber = "#";
    for (let i = 0; i < 6; i++) {
        randomValue = getRandomNumber();
        randomNumber += colors[randomValue];
      }
    document.body.style.backgroundColor=randomNumber;
    color.textContent=randomNumber;
}

);

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}