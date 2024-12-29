// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Ketka menu di klik
document.querySelector("#menu-hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector("#menu-hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
