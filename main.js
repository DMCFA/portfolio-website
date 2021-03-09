/*
Mobile Nav bar
*/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach(setStyleLink)
      })
    });
  
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
      // animate navlinks
      navLinks.forEach(setStyleLink);
      // burger animation
      burger.classList.toggle('toggle');
    });
  }
  
  function setStyleLink(el, index) {
    if (el.style.animation) {
      el.style.animation = ''
    } else {
      el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
    }
  }
  navSlide();


/*
Window Animation
*/

window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });