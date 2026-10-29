const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
const closeBar = document.getElementById("bar2");
const images = ["screeding.jpg", "butter.jpg", "tv consoles.jpg", "walls.jpg", "repairs.jpg"];
const salaza = document.getElementById("salaza");
const first = document.getElementById("first_selector");
const second = document.getElementById("second_selector");
const third = document.getElementById("third_selector");
const fourth = document.getElementById("fourth_selector");
const fifth = document.getElementById("fifth_selector");

first.classList.add("gazor");

function buttonUp() {
  bar.addEventListener("click", () => {
    nav.style.right = "0";

  });

  closeBar.addEventListener("click", () => {
    nav.style.right = "-50vw";
  });

}


function pickFirst() {
  first.addEventListener("click", () => {

   document.querySelectorAll(".selector").forEach(item =>{
    item.classList.remove("gazor");
   });

    first.classList.add("gazor");
    salaza.setAttribute("src", `${images[1]}`);
  });
}

function pickSecond() {
  second.addEventListener("click", () => {
  document.querySelectorAll(".selector").forEach(item =>{
    item.classList.remove("gazor");
   });
   
    second.classList.add("gazor");
    salaza.setAttribute("src", `${images[3]}`);
  });
}

function pickThird() {
  third.addEventListener("click", () => {
  document.querySelectorAll(".selector").forEach(item =>{
    item.classList.remove("gazor");
   });
   
    third.classList.add("gazor");
    salaza.setAttribute("src", `${images[2]}`);
  });
}

function pickFourth() {
  fourth.addEventListener("click", () => {
   document.querySelectorAll(".selector").forEach(item =>{
    item.classList.remove("gazor");
   });
   
    fourth.classList.add("gazor");
    salaza.setAttribute("src", `${images[0]}`);
  });
}

function pickFifth() {
  fifth.addEventListener("click", () => {
document.querySelectorAll(".selector").forEach(item =>{
    item.classList.remove("gazor");
   });
   
    fifth.classList.add("gazor");
    salaza.setAttribute("src", `${images[4]}`);
  });
}


function functionCall() {
  pickFirst();
  pickSecond();
  pickThird();
  pickFourth();
  pickFifth();
  buttonUp();
}

functionCall();