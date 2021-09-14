let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let close = document.querySelector('#close');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

searchIcon.onclick = ()=>{
    searchForm.classList.toggle('active');
}

close.onclick = ()=>{
    searchForm.classList.remove('active');
}


// Swiper slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop:true,
  });


