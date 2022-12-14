
/*------------------------------------------------FOR NAVIGATION BAR---------------------------------------- */

/* Select header section */
const navHeader = document.querySelector('.header');

/* Select header logo section */
const navBarLogo = document.querySelector('.nav-logo');
document.addEventListener('scroll', (event) =>{
    /* If the winwods scrolled below 300px hide the logo */
    if (window.pageYOffset > 300) {
        navBarLogo.style.display = 'none';
    }
    /* Show logo normally if the windows is top of the site */
    else {
        navBarLogo.style.display = 'flex';
    }
})

/*------------------------------------------------FOR SCROLL UP BUTTON---------------------------------------- */

/* Adapted version from https://www.youtube.com/watch?v=FK5DEa1Hvco&ab_channel=dcode. My improved version shows the scroll 
up button only after certion amount of scrolling.  */
/* Select scroll up button */
const scrollUpButton = document.querySelector('.scroll-up');
document.addEventListener('scroll', (event) =>{
    /* If the winwods scrolled below 1000px show the scroll up button */
    if (window.pageYOffset > 500) {
        scrollUpButton.style.display = 'block';
    }
    /* Hide the button if windows have not scrolled certion amount */
    else {
        scrollUpButton.style.display = 'none';
    }
})
/* Scroll website to top if the button is clicked */
scrollUpButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
    });
})

/*--------------------------------------------FOR HAMBURGER MENU------------------------------------ */

/* Adapted version from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp . Changed the styling so navigation 
links appear right side not at the bottom. Also changed color and other positioning styles the fit my website*/
/* DOM select the hamburger and navigation list elements*/
const burger = document.querySelector(".hamburger");
const navlist = document.querySelector(".nav-links");

/* If the hamburger menu is clicked show the navigation links */
burger.addEventListener("click", () => {
    navlist.classList.toggle("active");
})

/*-----------------------------------------FOR HOME PAGE----------------------------------------*/

//select faq questions
const questions = document.querySelectorAll(".faq");

//for each question if faq section is clicked add active class
questions.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})


/*-----------------------------------------FOR HISTORY PAGE----------------------------------------*/
//select all the cards
const cards = document.querySelectorAll(".card");

/* Adapted version of intersection observer from 
https://www.youtube.com/watch?v=2IbRtjez6ag&ab_channel=WebDevSimplified. Added root margin to show the animation
when card is already on the display */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        /* If card is already on the display once stop observing */
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    /*show card when card is already up 165px*/
    threshold: 0,
    rootMargin: '0px 0px -165px 0px'
})

cards.forEach(card => {
    observer.observe(card)
})

