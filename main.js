const humburger = document.querySelector(".humburger-Menu ")
const hiddenMenu = document.querySelector(".hiddenMenu")
const button = document.querySelector(".portfolioAnchor");
const portfolio = document.querySelector(".portfolio");
location.hash = "";

const css = window.document.styleSheets;


humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    hiddenMenu.classList.toggle("active");
})

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
        portfolio.animate([

            { 
              opacity:0,
              opacity:1,
              
            }
          ],{ duration: 1000,
              iterations:1,
              fill:"forwards"
        })
        //entry.target.classList.toggle("active");
        //entry.target.style.opacity = 1;
        //entry.target.style.transform = `translateY(70px)`;
       
    }
  })


}, {
    threshold:0.4,
  })


observer.observe(portfolio)