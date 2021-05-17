let inputBtn = document.getElementById("select");
let inputBox = document.getElementById("hehe");
let correct = document.getElementById("correct");
let correct2 = document.getElementById("correct2");
let correct3 = document.getElementById("correct3");
let correct4 = document.getElementById("correct4");
let box = document.getElementById("box");
let text = "";
function loadBox(){
   inputBox.style.opacity="1";
}

function isCorrect(){
   text = box.value;
   if(text=="2017"){
      correct1.innerHTML="Hidden in a gift to the President of Goldfish ";
      correct2.innerHTML="Babies three, four, and five will be easy to find ";
      correct3.innerHTML="While for the last one you wished";
      correct4.innerHTML="I hid them over near where I reclined";
   }else{
      correct.innerHTML="Haha, No."
   }
}