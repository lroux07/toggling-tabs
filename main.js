let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let input = document.querySelector("input");


// Button 1

function button1() {
  btn1.style.color="white"
  btn1.style.backgroundColor="#4b98fc"

  btn2.style.color="black"
  btn2.style.backgroundColor="white"

  btn3.style.color="black"
  btn3.style.backgroundColor="white"
}

btn1.addEventListener("click", button1);


// Button 2

function button2() {
  btn2.style.color="white"
  btn2.style.backgroundColor="#4b98fc"

  btn1.style.color="black"
  btn1.style.backgroundColor="white"

  btn3.style.color="black"
  btn3.style.backgroundColor="white"
}

btn2.addEventListener("click", button2);


// Button 3

function button3() {
  btn3.style.color="white"
  btn3.style.backgroundColor="#4b98fc"

  btn1.style.color="black"
  btn1.style.backgroundColor="white"

  btn2.style.color="black"
  btn2.style.backgroundColor="white"
}

btn3.addEventListener("click", button3);