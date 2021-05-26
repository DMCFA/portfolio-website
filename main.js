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
      // burger.classList.toggle('toggle');
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


  /*
  ButtoTn Animation
  */

  document.addEventListener("scroll", handleScroll);
  // get a reference to our predefined button
  var scrollToTopBtn = document.querySelector(".top-btn");
  
  function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.1;
  
    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
      //show button
      scrollToTopBtn.style.display = "block";
    } else {
      //hide button
      scrollToTopBtn.style.display = "none";
    }
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop);
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }