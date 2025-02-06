// typed js
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Web & Mobile Developer', 'Water Enjoyer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// loading page
window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader")
    loader.classList.add("preloader-hidden");
    loader.addEventListener("transitioned", () => {
        document.body.removeChild(loader);
    })
});

// sidebar otomaticly closed
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sidebarToggle = document.getElementById("check");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebarToggle.checked = false;
    });
  });
});