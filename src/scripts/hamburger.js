const hamburger = document.querySelector(".hamburger");
const hamburgerPlank = document.querySelector(".hamburger__plank");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", e => {

  hamburger.classList.toggle("hamburger--close");

  if (hamburger.classList.contains("hamburger--close")) {
    hamburgerPlank.style.display = "none";
    hamburgerMenu.style.right = "0";
    hamburgerMenu.style.opacity = "1";
  } else {
    hamburgerPlank.style.display = "";
    hamburgerMenu.style.right = "-100%";
    hamburgerMenu.style.opacity = "0";
  }

})