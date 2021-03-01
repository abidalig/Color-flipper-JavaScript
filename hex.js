const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  "A","B","C","D","E","F"];
// #f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
 var RandomNo = getRandomNum();
 //console.log("abid -"+ RandomNo);

 let hexColor = "#";
 for(let i=0; i<6; i++){

   hexColor += hex[getRandomNum()];
   //console.log(getRandomNum() +" brk "+ (hexColor));
 }
 color.textContent = hexColor;
 //console.log(hexColor);
 document.body.style.backgroundColor= hexColor ;
});

function getRandomNum(){
  return  Math.floor(Math.random() * hex.length);

}
