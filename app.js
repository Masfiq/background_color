const colors = ["red","green","rgba(133,122,200)","#f15025"];
const btn =document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    //random number between 0 to 3
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
}

);

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}