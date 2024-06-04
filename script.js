// typed js
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'AnimeLover', 'Water Enjoyer'],
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