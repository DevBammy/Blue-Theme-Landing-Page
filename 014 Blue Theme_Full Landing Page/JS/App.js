const navSlide = () => {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.navlinks');
    const slide = document.querySelector('.row');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // toggle.classList.toggle('toggle');
        slide.addEventListener('onScrol');
    });
}

navSlide();
