const menubtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");
const topbtn = document.querySelector(".topbtn");
const ratio = .1;

menubtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})

window.onscroll = () =>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active'); 
}

// Materials
$(document).ready(function(){
    $('.carousel').carousel({
        padding: 100
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 6000)
    }
  });


//slider with swiper
const swiper = new Swiper('.header-slider', {
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//intersection observer for scroll transition
var options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

//default transition
const handleIntersect = function(entries, observer) {
    entries.forEach((entry) => { 
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
            
      });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll("[class*='reveal-']").forEach(function (r){
    observer.observe(r)
});


//Event transition
const handleEvent = function(entries, observer) {
    console.log('handleEvent')
    entries.forEach((entry) => { 
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-event-visible')
            event_observer.unobserve(entry.target)
        }
            
      });
}

const event_observer = new IntersectionObserver(handleEvent, options);
event_observer.observe(document.querySelector(".reveal-event"));


//contact transition
const handleContact = function(entries, observer) {
    entries.forEach((entry) => { 
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-contact-visible')
            contact_observer.unobserve(entry.target)
        }
            
      });
}

const contact_observer = new IntersectionObserver(handleContact, options)
document.querySelectorAll("[class*='reveal-contact']").forEach(function (r){
    contact_observer.observe(r)
});

