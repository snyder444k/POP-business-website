const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
const closeBar = document.getElementById("bar2");
const images = ["screeding.webp", "butter.webp", "tv consoles.webp", "walls.webp", "repairs.webp"];
const salaza = document.getElementById("salaza");
const first = document.getElementById("first_selector");
const second = document.getElementById("second_selector");
const third = document.getElementById("third_selector");
const fourth = document.getElementById("fourth_selector");
const fifth = document.getElementById("fifth_selector");



first.classList.add("gazor");
$("#all_gal").addClass("azure");
$("#all_gal").css("border","none");

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

function filterAll(){
 $("#all_gal").on("click",function(){
  $(".mg").show();
  $(".but").removeClass("azure");
  $("#all_gal").addClass("azure");
  $(".but").css("border","1px solid #6d6c6c");
   $("#all_gal").css("border","none");
 });
}

function filterSittingRoom(){
  $("#living").on("click",function(){
   $(".mg").hide();
   $('[data-id="1"]').show();
  $(".but").removeClass("azure");
  $("#living").addClass("azure");
    $(".but").css("border","1px solid #6d6c6c");
  $("#living").css("border","none");
  });
}

function filterBedRoom(){
  $("#bedey").on("click",function(){
   $(".mg").hide();
   $('[data-id="2"]').show();
  $(".but").removeClass("azure");
  $("#bedey").addClass("azure");
    $(".but").css("border","1px solid #6d6c6c");
  $("#bedey").css("border","none");
  });
}

function filterTv(){
  $("#commerce").on("click",function(){
   $(".mg").hide();
   $('[data-id="3"]').show();
  $(".but").removeClass("azure");
  $("#commerce").addClass("azure");
    $(".but").css("border","1px solid #6d6c6c");
  $("#commerce").css("border","none");
  });
}


function filterWalls(){
  $("#walley").on("click",function(){
   $(".mg").hide();
   $('[data-id="4"]').show();
  $(".but").removeClass("azure");
  $("#walley").addClass("azure");
  $(".but").css("border","1px solid #6d6c6c");
  $("#walley").css("border","none");
  });
}


function functionCall() {
  pickFirst();
  pickSecond();
  pickThird();
  pickFourth();
  pickFifth();
  buttonUp();
  filterAll();
  filterSittingRoom();
  filterBedRoom();
  filterTv();
  filterWalls();
}

functionCall();
