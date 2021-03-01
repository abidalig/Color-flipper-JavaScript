
////window.alert("JS is running");
//var target = document.querySelector(".btn");
var colors= ["red", "green", "blue", "orange"];
var color = document.querySelector(".color");

 document.querySelector(".btn").addEventListener("click", function(){
  //console.log("i got clicked");

var RandomNumber = getRandomNo();
//console.log(RandomNumber);
  document.body.style.backgroundColor= colors[RandomNumber] ;
  color.textContent = colors[RandomNumber];


});
function getRandomNo(){
  return Math.floor(Math.random() * colors.length);
}
