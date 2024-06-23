const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#garismenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const gmenu = document.querySelector("#garismenu");

document.addEventListener("click", function (e) {
  if (!gmenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
