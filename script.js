var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.getElementById("demo");
var color4 = document.getElementById("one");
var body = document.querySelector("body");
var mementos1 = [];
var mementos2 = [];



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
	// console.log(x);	
}

backgroundColor();
// color1.addEventListener("input", backgroundColor());
// color2.addEventListener("input", backgroundColor());
color1.addEventListener("input", backgroundColor);
color2.addEventListener("input", backgroundColor);


function undo() {
  console.log(mementos1);
  console.log(mementos2);

  const lastMemento1 = mementos1.pop();
  const lastMemento2 = mementos2.pop();


  // console.log(lastMemento1);
  // console.log(lastMemento2);
  for (var i = 0; i < mementos1.length && i< mementos2.length; i++) {
  		body.style.background = "linear-gradient(to right," + mementos1[i] + "," + mementos2[i] + ")";
  		h3.textContent = mementos1[i] + mementos2[i];
  		// console.log(mementos1[i]);
  		// console.log(mementos2[i]);
  }
  
  if (mementos1.length < 1 && mementos2.length < 1) {
  	initial();
  	backgroundColor();
  }
  // var nec = color3.value = lastMemento1 ? lastMemento1 : color3.value;
  // console.log(nec);
}

