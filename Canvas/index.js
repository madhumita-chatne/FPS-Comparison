// "use strict";
var numImages = 5000;
const fpsElem = document.querySelector("#fps");


let then = 0;
function render(now) {
    // console.log("now: ", now)
  now *= 0.001;                          // convert to seconds
  const deltaTime = now - then;          // compute time since last frame
  then = now;                            // remember time for next frame
  const fps = 1 / deltaTime;             // compute frames per second
  fpsElem.textContent = fps.toFixed(0);  // update fps display
  
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const box = document.getElementById("boxy"),
ctx = box.getContext("2d"),
ping = new AudioContext();
let x, y,
dx = 4,
dy = 4;

  img = new Image();
  img.src = 'https://webglfundamentals.org/webgl/resources/star.jpg';
  img.onload = function() {
    x = getRandomInRange(0, box.width - img.width);
    y = getRandomInRange(0, box.height - img.height);
    draw();
  };

function draw() {
  console.log("imgs source in draw: ", img.src)
  ctx.clearRect(0, 0, box.width, box.height);
  for(let i=0; i<numImages; i++){
    ctx.drawImage(img, getRandomInRange(0, box.width - img.width), getRandomInRange(0, box.width - img.width), img.width, img.height);
  }
  if (x < 0 || x > box.width - img.width) { 		
		dx=-dx; 
	}
	if (y < 0 || y > box.height - img.height) { 
		dy=-dy;
	}
	x+=dx;
	y+=dy;
	window.requestAnimationFrame(draw);
}