"use strict";

let count = 0;
let id = null;

function _Initialize() {
  button.onclick=moveImage;
}

function moveImage() {
  let speed = parseInt(speedSelect.value);  
  let posX = 0;
  let posY = 0;
  imgSun.style.top = posY + "px"; 
  imgSun.style.left = posX + "px";
  clearInterval(id);
  console.log(`id = ${id}`);
  id = setInterval(frameRight, 5);
  console.log(`id = ${id}`);
  function frameRight() {
    if (posX > 770) {
      posX = 770;
    }
    if (posX == 770) {
      clearInterval(id);
      id = setInterval(frameDown, 5);
    } else {
      posX += speed; 
      count++;
      imgSun.style.left = posX + "px"; 
    }
  }
  function frameDown() {
    if (posY > 350) {
      posY = 350;
    }
    if (posY == 350) {
      clearInterval(id);
      id = setInterval(frameLeft, 5);
    } else {
      posY += speed; 
      count++;
      imgSun.style.top = posY + "px";  
    }
  }
  function frameLeft() {
    if (posX < 0) {
      posX = 0;
    }
    if (posX == 0) {
      clearInterval(id);
      id = setInterval(frameUp, 5);
    } else {
      posX -= speed; 
      count++; 
      imgSun.style.left = posX + "px"; 
    }
  }
  function frameUp() {
    if (posY < 0) {
      posY = 0;
    }
    if (posY == 0) {
      clearInterval(id);
    } else {
      posY -= speed; 
      count++;
      imgSun.style.top = posY + "px"; 
    }
  }
  console.log(`count = ${count}`);
}
