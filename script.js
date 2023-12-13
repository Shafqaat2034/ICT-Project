
let navBtn = document.querySelector('.hamburger');
let navBar = document.querySelector('.nav-list');
let logo = document.querySelector('.logo1');
let fLogo = document.querySelector('.logo2');
let cartLogo1 = document.querySelector('.mob-cart');
let cartLogo2 = document.querySelector('.pc-cart');
let prCart = document.querySelector('.info-inputs button img')
let body = document.querySelector('body');
let themeBtn = document.querySelector('.theme-btn');
let nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('nav-open');
    navBtn.classList.toggle('ham-close');
});

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeBtn.classList.toggle('theme-sun');
    logo.classList.toggle('logo-invert');
    cartLogo1.classList.toggle('logo-invert');
    cartLogo2.classList.toggle('logo-invert');
    navBtn.classList.toggle('logo-invert');
    themeBtn.classList.toggle('logo-invert');
    fLogo.classList.toggle('logo2-invert');
    prCart.classList.toggle('dark-cart')
});

window.onscroll = () => {
    nav.classList.toggle('nav-glow', window.scrollY > 300);
};


// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//   });


  const swiper = new Swiper('.mySwiper', {
    autoplay: {
        delay: 700,
        disableonInteraction: false,
    },
    loop: true,
    spaceBetween: 25,
    freeMode: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

});