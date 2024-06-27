// get elements from html and declare variables
let boxOne = document.getElementById("boxOne") as HTMLHtmlElement;
let boxTwo = document.getElementById("boxTwo") as HTMLHtmlElement;
let boxThree = document.getElementById("boxThree") as HTMLHtmlElement;
let landing = document.getElementById("landing") as HTMLElement;

// background change operation
function changeBackground(imageUrl:string) {
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

// Set up the onclick event handlers
boxOne.onclick = () => changeBackground('imgs/carousel-1.jpg');
boxTwo.onclick = () => changeBackground('imgs/carousel-2.jpg');
boxThree.onclick = () => changeBackground('imgs/carousel-3.jpg');