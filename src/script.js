const openMenu = document.querySelector(".openmenu");
const navBar = document.querySelector(".navbar");
const featuresBtn = document.querySelector(".feat-btn");
const companyBtn = document.querySelector(".coy-btn");
const featuresSubMenu = document.querySelector(".feat-submenu");
const companySubMenu = document.querySelector(".coy-submenu");


// Toggle Function starts here
openMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
    openMenu.src = "./images/icon-menu.svg";
  } else {
    navBar.classList.add("open");
    openMenu.src = "./images/icon-close-menu.svg";
  }
}



featuresBtn.addEventListener("click", () => {
  if (featuresSubMenu.classList.contains("open")) {
    featuresSubMenu.classList.remove("open");
    featuresBtn.src = './images/icon-arrow-down.svg';
  } else {
    companySubMenu.classList.remove("open");
    featuresSubMenu.classList.add("open");
    featuresBtn.src = './images/icon-arrow-up.svg';
  }
})

companyBtn.addEventListener("click", () => {
  if (companySubMenu.classList.contains("open")) {
    companySubMenu.classList.remove("open");
    companyBtn.src = './images/icon-arrow-down.svg';
  } else {
    featuresSubMenu.classList.remove("open");
    companySubMenu.classList.add("open");
    companyBtn.src = './images/icon-arrow-up.svg';
  }
})







