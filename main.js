const humburger = document.querySelector(".humburger-Menu ")
const hiddenMenu = document.querySelector(".hiddenMenu")
const button = document.querySelector(".portfolioAnchor");
const portfolio = document.querySelector(".portfolioHeading");
const editdooTitle = document.querySelector(".editdooTitle");
const editdooImage = document.querySelector(".editdooImage");
const editdooDesc = document.querySelector(".editdooDescription");

location.hash = "";

const css = window.document.styleSheets;


humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    hiddenMenu.classList.toggle("active");
})

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
        entry.target.animate([

            { 
              transform:"translateY(0px)",
              opacity:0,
              opacity:1,
              
            }
          ],{ duration: 1000,
              iterations:1,
              fill:"forwards",
              easing:"ease-out"
        })
       
    }
  })


}, {
    threshold:0.01,
  })

  const animateTwoElementsIn = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){

        entry.target.animate([
  
          { 
            transform:"translateY(0px)",
            opacity:0,
            opacity:1,
            
          }
        ],{ duration: 1000,
            iterations:1,
            fill:"forwards",
            easing:"ease-out"
      })

          entry.target.nextElementSibling.animate([
  
              { 
                transform:"translateY(0px)",
                opacity:0,
                opacity:1,
                
              }
            ],{ duration: 1000,
                iterations:1,
                fill:"forwards",
                easing:"ease-out"
          })
         
      }
    })
  
  
  }, {
      threshold:0.01,
    })

observer.observe(portfolio);
observer.observe(editdooTitle);
animateTwoElementsIn.observe(editdooImage);



