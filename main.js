
// Reset the hash to an empty string on page reload
location.hash = "";

// Storing DOM elements in variables
const humburger = document.querySelector(".humburger-Menu ");
const hiddenMenu = document.querySelector(".hiddenMenu");

// Toggle the "active" class on the hamburger menu and hidden menu when the hamburger menu is clicked
humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    hiddenMenu.classList.toggle("active");
})

// Function to add event listeners for a slider functionality
function eventListenerForSlider(right,left,array,arrayOfCircles){
  let count = -1;
  let countTwo = 0;
  arrayOfCircles.forEach((element,index) => {
    element.addEventListener("click", () =>{
      
      if (index === 0){
        count = -1;
        arrayOfCircles[index].style.backgroundColor = "#6A994E";
        arrayOfCircles[index + 1].style.backgroundColor = "transparent";
        arrayOfCircles[index + 2].style.backgroundColor = "transparent";
        array[index].style.display = "flex";
        array[index + 1].style.display = "none";
        array[index + 2].style.display = "none";
        
      }

      else if(index === 1){
        count = 0;
        arrayOfCircles[index].style.backgroundColor = "#6A994E";
        arrayOfCircles[index - 1].style.backgroundColor = "transparent";
        arrayOfCircles[index + 1].style.backgroundColor = "transparent";
        array[index].style.display = "flex";
        array[index - 1].style.display = "none";
        array[index + 1].style.display = "none";

      }

      else if(index === 2){
        count = 1;
        arrayOfCircles[index].style.backgroundColor = "#6A994E";
        arrayOfCircles[index - 1].style.backgroundColor = "transparent";
        arrayOfCircles[index - 2].style.backgroundColor = "transparent";
        array[index].style.display = "flex";
        array[index - 1].style.display = "none";
        array[index - 2].style.display = "none";
        
      }
      
    })
    
  })
  // Event listener for the right arrow click
  right.addEventListener("click", () =>{
      count += 1;
      if (count === array.length) {
        count = 0;
      }
      // Adjusting the display property of array items based on the count
      if (count === 0){
        array[count].style.display = "none";
        array[count + 1].style.display = "flex";
        array[count + 2].style.display = "none"; 
        arrayOfCircles[count].style.backgroundColor  = "transparent";
        arrayOfCircles[count + 1].style.backgroundColor = "#6A994E";
        arrayOfCircles[count + 2].style.backgroundColor  = "transparent";  
      } 
    
      else if (count === 1){
        array[count - 1].style.display = "none";
        array[count].style.display = "none";
        array[count + 1].style.display = "flex"; 
        arrayOfCircles[count - 1].style.backgroundColor  = "transparent";
        arrayOfCircles[count].style.backgroundColor = "transparent";
        arrayOfCircles[count + 1].style.backgroundColor  = "#6A994E";
      } 
    
      else if (count === 2) {
        array[count - 2].style.display = "flex";
        array[count - 1].style.display = "none";
        array[count].style.display = "none";  
        arrayOfCircles[count - 2].style.backgroundColor  = "#6A994E";
        arrayOfCircles[count - 1].style.backgroundColor = "transparent";
        arrayOfCircles[count].style.backgroundColor  = "transparent";
      } 
     
    })
      
  // Event listener for the left arrow click
  left.addEventListener("click", ()=>{
      count -= 1;
      console.log(countTwo);
      countTwo += 1;

      if (countTwo === 1 && count === -2){
        count = 1;
      }

      if (count < 0 ) {
        count = array.length - 1 ;
      }

      // Adjusting the display property of array items based on the count
      if (count === 0){
        array[count].style.display = "none";
        array[count + 1].style.display = "flex";
        array[count + 2].style.display = "none";  
        arrayOfCircles[count].style.backgroundColor  = "transparent";
        arrayOfCircles[count + 1].style.backgroundColor = "#6A994E";
        arrayOfCircles[count + 2].style.backgroundColor  = "transparent";
      } 
    
      else if (count === 1){
        array[count - 1].style.display = "none";
        array[count].style.display = "none";
        array[count + 1].style.display = "flex";  
        arrayOfCircles[count - 1].style.backgroundColor  = "transparent";
        arrayOfCircles[count].style.backgroundColor = "transparent";
        arrayOfCircles[count + 1].style.backgroundColor  = "#6A994E";
      } 
    
      else if (count === 2) {
        array[count - 2].style.display = "flex";
        array[count - 1].style.display = "none";
        array[count].style.display = "none";  
        arrayOfCircles[count - 2].style.backgroundColor  = "#6A994E";
        arrayOfCircles[count - 1].style.backgroundColor = "transparent";
        arrayOfCircles[count].style.backgroundColor  = "transparent";
      } 
     
      
      })    

 
  
  
}

// Storing DOM elements in variables and an array
const rightArrow = document.querySelector(".portfolioButtonRight");
const leftArrow = document.querySelector(".portfolioButtonLeft");
const arrayOfPictures = [document.querySelector(".editdooImage"), document.querySelector(".editdooWorkSec"),document.querySelector(".editdooFaqSec")];
const arrayOfCircles = [document.querySelector(".firstCircle"), document.querySelector(".secondCircle"), document.querySelector(".thirdCircle")];

// Initialize the slider functionality with the right and left arrows and the array of pictures
eventListenerForSlider(rightArrow, leftArrow, arrayOfPictures, arrayOfCircles );


// Function to append a project heading to the projects div
const appendProjects = function (headingProject)
{
  const projects = document.getElementById("projects");
  const heading = document.createElement("h3");
  heading.textContent = headingProject;
  projects.append(heading);
} 

//New observer class that observes if element is on screen so the animation can start
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>
  {
    if(entry.isIntersecting)
    {
        entry.target.animate(
          [

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

//New observer class that observes if element is on screen so the animation can start
  const animateTwoElementsIn = new IntersectionObserver(entries =>
    {
    entries.forEach(entry =>
      {
      if(entry.isIntersecting)
        {

        entry.target.animate
        (
          [
  
          { 
            transform:"translateY(0px)",
            opacity:0,
            opacity:1,
            
          }
        ],{ duration: 1300,
            iterations:1,
            fill:"forwards",
            easing:"ease-out"
          }  
        )

          entry.target.nextElementSibling.animate
          (
            [
  
              { 
                transform:"translateY(0px)",
                opacity:0,
                opacity:1,    
              }
            ],{ duration: 1300,
                iterations:1,
                fill:"forwards",
                easing:"ease-out"
              }
          )
         
      }
    })
  }, 
    {
      threshold:0.001,
    })

// Storing DOM elements in variables
const portfolio = document.querySelector(".portfolioHeading");
const editdooTitle = document.querySelector(".editdooTitle");
const editdooImage = document.querySelector(".buttonAndImage");
const aboutMeHeading = document.querySelector(".aboutMeHead");
const aboutParagraph = document.querySelector(".aboutMeDescription");
//Invoke observe method on elements
observer.observe(portfolio);
observer.observe(editdooTitle);
observer.observe(aboutMeHeading);
observer.observe(aboutParagraph);
animateTwoElementsIn.observe(editdooImage);



