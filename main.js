const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_section');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        overlay.classList.toggle('overlay_active');
        body.classList.toggle('body_hidden');
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        overlay.classList.toggle('overlay_active');
        body.classList.toggle('body_hidden');
    });



}

navSlide();