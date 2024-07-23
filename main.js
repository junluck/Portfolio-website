//storing classes in variables
const humburger = document.querySelector(".humburger-Menu ")
const hiddenMenu = document.querySelector(".hiddenMenu")
const button = document.querySelector(".portfolioAnchor");
const portfolio = document.querySelector(".portfolioHeading");
const editdooTitle = document.querySelector(".editdooTitle");
const editdooImage = document.querySelector(".editdooImage");
const editdooDesc = document.querySelector(".editdooDescription");

//page reaload back to home link
location.hash = "";

//humburger menu that toggles on active class when clicked
humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    hiddenMenu.classList.toggle("active");
})

//function that takes projects and appends each project to the projects div
const appendProjects = function (headingProject){
  const projects = document.getElementById("projects");
  const heading = document.createElement("h3");
  heading.textContent = headingProject;
  projects.append(heading);


} 

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
        entry.target.animate([

            { 
              transform:"translateY(0px)",
              opacity:0,
              opacity:1,
              
            }
          ],{ duration: 1200,
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
        ],{ duration: 1200,
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
            ],{ duration: 1200,
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



