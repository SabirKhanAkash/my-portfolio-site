window.addEventListener("load", () =>{
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");

  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() =>{
    document.querySelector(".page-loader").style.display = "none";
  },600);
});

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    console.log("Ho");
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        const hash = e.target.hash;
        console.log(hash);
        if(e.target.classList.contains("nav-item")){
            console.log(hash);
            toggleNavbar();
            // console.log("Achhi bhai");
        }
        else{
            console.log("Nai bhai");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});


const textDisplay = document.getElementById('text')
const phrases = ['Software Developer.', 'Front-End Web Developer.', 'Problem Solver.', 'Gamer.', 'Tech Enthusiast.', 'Learner.']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  
  const normalSpeed = Math.random() * (300 -299) + 35;
  const time = isEnd ? 800 : isDeleting ? normalSpeed : normalSpeed
  setTimeout(loop, time)
}

loop()
  