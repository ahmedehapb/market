let pages = document.querySelector(".pages");
let list = document.querySelector(".list");
let menuicon = document.querySelector(".menuicon");
let menuParent = document.querySelector(".menuParent");
let closemenu = document.querySelector(".closemenu");



pages.onclick = function(e){
    e.preventDefault(e);
    list.classList.toggle("closelist")
}

menuicon.onclick = function(){
    menuParent.classList.toggle("closelist")
}

closemenu.onclick = function(){
    menuParent.classList.toggle("closelist")
}

const swiper = new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 8,
    breakpoints:{
        1300:{
            slidesPerView:5,
        },
        990: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    } 
})