// get elements from html and declare variables
let span = document.querySelector(".top") as HTMLSpanElement;
let pageMenu = document.getElementById("pageMenu") as HTMLElement;
let menu = document.getElementById("menubar") as HTMLElement;
let flag = true;
let nav = document.getElementById("sidenav") as HTMLElement;

// scroll to top 
window.onscroll = function () {
    window.scrollY >= 500 ? span.classList.remove("show") : span.classList.add("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// show menu
pageMenu.onclick = function (event) {
    // Prevent the document click event from firing
    event.stopPropagation();
    menu.style.display = flag ? "flex" : "none";
    flag = !flag;
};

// Add an event listener to the document to hide the menu when clicking anywhere else
document.onclick = function () {
    menu.style.display = "none";
    flag = true; // Reset flag so that menu can be shown again when pageMenu is clicked
};

// nav menu
function openNav() {
    nav.style.width = "100%";
}
function closeNav() {
    nav.style.width = "0";
}