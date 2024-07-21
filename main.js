const humburger = document.querySelector(".humburger-Menu ")
const hiddenMenu = document.querySelector(".hiddenMenu")
const button = document.querySelector(".portfolioAnchor");
location.hash = "";

humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    hiddenMenu.classList.toggle("active");
})




