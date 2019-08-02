var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.getElementById("demo");
var color4 = document.getElementById("one");
var body = document.querySelector("body");

function initial(){
	color3.value = color1.value;
	color4.value = color2.value;
}

initial();

function random(){
	
	var x = ['#'+(Math.random()*0xFFFFFF<<0).toString(16)];
	var y = ['#'+(Math.random()*0xFFFFFF<<0).toString(16)];
  	
  	document.getElementById("demo").value = x;
  	document.getElementById("one").value = y;
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


function undo(){
	// var arr = [];
 //        for (var i = 0; i < 5; i++)
 //        {
 //            arr.push(Math.floor(Math.random() * 6) + 1)
 //        }
 //        console.log(arr);
 //        arr.pop(4);
 //        console.log(arr.pop());
 		

}