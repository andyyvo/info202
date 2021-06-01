const menuSlider = () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu li");

    // hamburger toggle
    hamburger.addEventListener('click',() => {
        menu.classList.toggle('nav-active');
        
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                // remove style
                link.style.animation = ''
            } else {
                // adding style
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
            }
        });

        // animate burger
        hamburger.classList.toggle('toggle');

    });

}

const app = () => {
    menuSlider();
}

app();