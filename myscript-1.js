const slides = [
    'img/home-bg.jpg',
    'img/about-bg.jpg',
    'img/service-bg.jpg',
    'img/review-bg.jpg',
    'img/contact-bg.jpg'
];

let slideIndex = 0;
const container = document.querySelector('body');

function showSlide(index) {
    // container.classList.remove('fade');
    container.style.backgroundImage = `url(${slides[index]})`;
    // setTimeout(() => { container.classList.add('fade');}, 10);
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

showSlide(slideIndex); // start initial slide