
window.onscroll = function() {navScroll()};


let navContactLink = document.getElementsByName('contact__link');

function navScroll() {
  if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    document.getElementById('index_nav').className = 'nav_white';
    navContactLink.classList.add('nav_white--contact');
  }
  else {
    document.getElementById('index_nav').className = "";
    navContactLink.classList.remove('nav_white--contact');
  }
}

const buttons = document.querySelectorAll('[data-carousel--btn]')


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
    .closest('[data-carousel')
    .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1; 
    }

    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;

    delete activeSlide.dataset.active;
  })
})


function openMenu() {
  document.body.classList += " menu--open" 
}

function closeMenu() {
  document.body.classList.remove('menu--open')
}

function openService() {
  document.body.classList += " open--slide"
}

function closeService() {
  document.body.classList.remove("open--slide");
}





let couponPopUp = document.getElementById('coupon');

setTimeout(function() {
  couponPopUp.style.visibility = 'visible';
  couponPopUp.style.opacity = '1';
}, 5000);

function closeCoupon() {
  couponPopUp.style.visibility = 'hidden';
  couponPopUp.style.opacity = '0';
}