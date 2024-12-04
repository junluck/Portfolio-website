
// Reset the hash to an empty string on page reload
location.hash = "";

// Storing DOM elements in variables
const humburger = document.querySelector(".humburger-Menu ");
const hiddenMenu = document.querySelector(".hiddenMenu");

let arrayOfPorfolioWork = [
  {
    nameOfproject:"Editdoo",
    imagesOfProject:["./Resources/editdoo.png","./Resources/form.png","./Resources/faqs.png"],
    leftArrow:"./Resources/portfolio button left.svg",
    rightArrow:"./Resources/portfolio button right.svg",
    descriptionParagraph:"Editdoo is a comprehensive website offering premium motion design and video editing services to customers.We specialize in transforming ideas into captivating visual content that engages and inspires audiences. Catering to a diverse range of industries,our platform offers tailored solutions designed to elevate your brand’s presence.<br><br>Technologies:HTML,CSS and Javascript",
    tryDemo:"https://editdoo-motion-design.vercel.app/index.html",
    viewCode:"https://github.com/junluck/Editdoo_Motion-design"
  }
]



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
const rightArrowJammming = document.querySelector(".jammmingPortfolioButtonRight");
const leftArrowJammming = document.querySelector(".jammmingPortfolioButtonLeft");
const arrayOfPicturesJammming = [document.querySelector(".jammmingImage"), document.querySelector(".jammmingImageTwo"),document.querySelector(".jammmingImageThree")];
const arrayOfCirclesJammming = [document.querySelector(".jammmingfirstCircle"), document.querySelector(".jammmingsecondCircle"), document.querySelector(".jammmingthirdCircle")];

// Initialize the slider functionality with the right and left arrows and the array of pictures
eventListenerForSlider(rightArrow, leftArrow, arrayOfPictures, arrayOfCircles );
eventListenerForSlider(rightArrowJammming, leftArrowJammming, arrayOfPicturesJammming, arrayOfCirclesJammming );


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
      observer.unobserve(entry.target)
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
      { ;
        console.log(entry)
      if(entry.isIntersecting)
        {
         
          console.log(entry.target)
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
let arrayOfNameOfTechs = [document.querySelector(".popUpDiv"),document.querySelector(".popUpDivTwo"),document.querySelector(".popUpDivThree"),document.querySelector(".popUpDivFour"),document.querySelector(".popUpDivFive"),document.querySelector(".popUpDivSix"),document.querySelector(".popUpDivSeven"),document.querySelector(".popUpDivEight"),document.querySelector(".popUpDivNine")]
let arrayOfLogos = [document.querySelector(".javascriptPic"),document.querySelector(".cssLogo"),document.querySelector(".htmlLogo"),document.querySelector(".reactLogo"),document.querySelector(".reduxLogo"),document.querySelector(".chaiLogo"),document.querySelector(".jestLogo"),document.querySelector(".mochaLogo"),document.querySelector(".gitLogo")]

function arrayListner(array,arrayTwo){
  array.forEach((element,index)=>{
    element.addEventListener("mouseover",(e)=>{
      arrayTwo[index].style.opacity = "1";
    })
    element.addEventListener("mouseout",(e)=>{
      arrayTwo[index].style.opacity = "0";
    })
  })
}

arrayListner(arrayOfLogos,arrayOfNameOfTechs)
 
const profilePic = document.querySelector(".manProfilePic")
const  profilePicTwo = document.querySelector(".manProfilePicTwo")

profilePic.addEventListener("mouseover",(e)=>{
  e.target.style.opacity = "0" 
})

profilePic.addEventListener("mouseout",(e)=>{
  e.target.style.opacity = "1" 
})

const form = document.querySelector(".contactForm");
const name = document.getElementById("name");
const thankYou =  document.querySelector(".thankYou"); 
form.addEventListener("submit",(event)=>{
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  event.preventDefault()
  // function that sends email 
  function sendMail(){
      let params = data


      emailjs.send("service_ouim9y7","template_14safte", params).then(()=>{

      }).catch((e)=>{
          console.log("error has occured")
      })
      }
      
      sendMail()
      thankYou.style.display = "flex"
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
     
  })

  form.addEventListener("click",(event)=>{
        thankYou.style.display = "none"
    })


const logoDiv = document.querySelector(".logoGroup");
const logo = document.querySelector(".logoActive")
const logoDivTwo= document.querySelector(".logoGroupTwo");
const logoTwo= document.querySelector(".logoActiveTwo")
logoDiv.addEventListener("mouseover",()=>{
  logo.style.opacity= "1"
  console.log("touch")

})

logoDiv.addEventListener("mouseout",()=>{
   logo.style.opacity= "0"
  console.log("touch")

})

logoDivTwo.addEventListener("mouseover",()=>{
  logoTwo.style.opacity= "1"
  console.log("touch")

})

logoDivTwo.addEventListener("mouseout",()=>{
  logoTwo.style.opacity= "0"
  console.log("touch")

})