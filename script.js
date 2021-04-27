var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.getElementById("demo");
var color4 = document.getElementById("one");
var body = document.querySelector("body");
var undobtn = document.getElementById("undobtn");
var mementos1 = [];
var mementos2 = [];
const redo1 = [];
const redo2 = [];
const lastMemento1 = [];
const lastMemento2 = [];
var array3;
var array4;
var array5;
var array6;


function initial(){
	color3.value = color1.value;
	color4.value = color2.value;
}

initial();

function random(){
	
	var x = ['#'+(Math.random()*0xFFFFFF<<0).toString(16)];
	var y = ['#'+(Math.random()*0xFFFFFF<<0).toString(16)];
  	
  	color3.value = x;
  	color4.value = y;
  	mementos1.push(color3.value);
  	mementos2.push(color4.value);
  	// console.log(x);
  	// console.log(y);
  	// console.log(x.pop());
  	// console.log(y.pop());

  	var z = body.style.background = "linear-gradient(to right," + color3.value + "," + color4.value + ")";
	h3.textContent = color3.value + color4.value;
	// return x;
}



function backgroundColor(){
	var x = body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	h3.textContent = x;
}

backgroundColor();
color1.addEventListener("input", backgroundColor);
color2.addEventListener("input", backgroundColor);


undobtn.addEventListener("click", function undo() {
 	// console.log(mementos1);
  	// console.log(mementos2);

   	var undoValuePop1 = mementos1.pop();
   	lastMemento1.push(undoValuePop1);

   	var undoValuePop2 = mementos2.pop();
   	lastMemento2.push(undoValuePop2);


  	// console.log(lastMemento1);
 	// console.log(lastMemento2);
  	for (var i = 0; i < mementos1.length && i< mementos2.length; i++) {
  		body.style.background = "linear-gradient(to right," + mementos1[i] + "," + mementos2[i] + ")";
  		h3.textContent = mementos1[i] + mementos2[i];
  	}
  
  	if (mementos1.length < 1 && mementos2.length < 1) {
  		initial();
  		backgroundColor();
  	}

	array3 = redo1.concat(lastMemento1);
	array5 = redo2.concat(lastMemento2);
	// console.log(array3);

})

function redoo(){

	array4 = array3.pop();
	array6 = array5.pop();
	// console.log(array4);

	body.style.background = "linear-gradient(to right," + array4 + "," + array6 + ")";
	h3.textContent = array4 + array6;

	// console.log(array4.length);

	// for (var i = 0; i < array4.length; i++) {
	// 	body.style.background = array4[i];
	// 	h3.textContent = array4[i];
	// }

	// if (array3.length < 1) {
	// 	h3.textContent = array3[0];
	// }
}