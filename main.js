const humburger = document.querySelector(".humburger-Menu ")
const hiddenMenu = document.querySelector(".hiddenMenu")
const button = document.querySelector(".portfolioAnchor");

humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    hiddenMenu.classList.toggle("active");
})

location.hash = "";
