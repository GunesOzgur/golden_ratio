function myFunction() {
  var x = document.getElementById("enterRatio");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let posRatio = 1.618034;
//let posRatio = 1;

let numberOfSeeds = 100;
	
let imgSrc = "C:/Users/User/Desktop/WebApps/golden/seed.png";
	
let seedSize = "6";
	
let seedWidth = seedSize;
let seedHeight = seedSize;
	
var flowerCenter = 300;
let expansionVelocity = 2;
	
let seed = new Array(numberOfSeeds);
let angle = 0;

let renewSeeds = setInterval(null,null);

function putSeeds() {
	
	
	for(i = 0; i < seed.length; i++) {
		
		seed[i] = document.createElement("IMG");
		seed[i].setAttribute("src", imgSrc);
		seed[i].setAttribute("width", seedWidth);
		seed[i].setAttribute("height", seedHeight);
		seed[i].setAttribute("alt", "Seed"+i);
		document.body.appendChild(seed[i]);
		
		seed[i].style.position = "relative";
		
		angle += (posRatio * 2 * Math.PI);
		angle %= (2 * Math.PI)
		
		seed[i].style.left = (flowerCenter + ((Math.cos(angle)) * expansionVelocity * (i+1)) - i*seedSize);
		seed[i].style.top = (flowerCenter - ((Math.sin(angle)) * expansionVelocity * (i+1)));
	}
	
	angle = 0; //to prevent axis shift
	
	document.getElementById("ratioPanel").innerHTML = posRatio;
}

function poseSeeds() {
	
	document.getElementById("ratioPanel").innerHTML = posRatio;
	
	let i = 0;
	for(i = 0; i < seed.length; i++) {
		
			angle += (posRatio * 2 * Math.PI);
			angle %= (2 * Math.PI)
		
			seed[i].style.left = (flowerCenter + ((Math.cos(angle)) * expansionVelocity * (i+1)) - i*seedSize);
			seed[i].style.top = (flowerCenter - ((Math.sin(angle)) * expansionVelocity * (i+1)));
		}
	
	angle = 0; //to prevent axis shift
}

function adjustRatio(event, val) {
	
	if(event.keyCode == 13) {
		
		posRatio = parseFloat(val); //write val(string) into posRatio as a number
		poseSeeds();
	}
}

function increase() {
	
	increaseRatio();
	renewSeeds = setInterval(increaseRatio ,100);
}

function decrease() {
	
	decreaseRatio()
	renewSeeds = setInterval(decreaseRatio ,100);
}

function mouseUp() {
	
	clearInterval(renewSeeds);
}

function increaseRatio() {
	
	posRatio += 0.0001;
	poseSeeds();
}

function decreaseRatio() {
	
	posRatio -= 0.0001;
	poseSeeds();
}