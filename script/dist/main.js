"use strict";
let span = document.querySelector(".top");
let pageMenu = document.getElementById("pageMenu");
let menu = document.getElementById("menubar");
let flag = true;
let nav = document.getElementById("sidenav");
window.onscroll = function () {
    window.scrollY >= 500 ? span.classList.remove("show") : span.classList.add("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
pageMenu.onclick = function (event) {
    event.stopPropagation();
    menu.style.display = flag ? "flex" : "none";
    flag = !flag;
};
document.onclick = function () {
    menu.style.display = "none";
    flag = true;
};
function openNav() {
    nav.style.width = "100%";
}
function closeNav() {
    nav.style.width = "0";
}
