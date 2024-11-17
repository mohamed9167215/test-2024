'use strict';


const progressFill = document.querySelector(".progress-fill");
var swiper = new Swiper(".parallax-slider", {
    speed: 1000,
    parallax: true,
    loop: true,
    autoplay: {
        delay: 10000, // Adjust autoplay delay as needed
        disableOnInteraction: false
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -1000]
        },
        next: {
            translate: ["100%", 0, 0]
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        slideChange: function () {
            // Reset progress bar when slide changes
            progressFill.style.width = '0%';
        },
        autoplayTimeLeft(s, time, progress) {
            // Update progress bar width based on autoplay time left
            progressFill.style.width = (1 - progress) * 100 + '%';
        }
    }
});


/* Swiper js */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  




const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )



var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("closes");
});


/*
const pre = document.querySelector(".preloader");

// preloader
Window.onload = setInterval (function()
{pre.style.display = "none"},
5000);

*/

const pre = document.querySelector(".pre-loader");

// preloader
Window.onload = setInterval (function()
{pre.style.display = "none"},
5000); 
