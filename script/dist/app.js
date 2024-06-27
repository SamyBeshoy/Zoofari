"use strict";
let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let boxThree = document.getElementById("boxThree");
let landing = document.getElementById("landing");
function changeBackground(imageUrl) {
    landing.style.cssText = `
    background: linear-gradient(0deg, rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    transition: all 0.5s;
    `;
    console.log("background change");
}
boxOne.onclick = () => changeBackground('imgs/carousel-1.jpg');
boxTwo.onclick = () => changeBackground('imgs/carousel-2.jpg');
boxThree.onclick = () => changeBackground('imgs/carousel-3.jpg');
