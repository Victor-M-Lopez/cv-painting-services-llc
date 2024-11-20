let emailSpace = document.querySelector('.email');
let navEmail = document.querySelector('.nav_email');

function insertEmail () {
  let emailName = '&#105;&#110;&#102;&#111;';
  let emailSign = '&#64;';
  let emailExtension = '&#99;&#118;&#112;&#97;&#105;&#110;&#116;&#105;&#110;&#103;&#115;&#101;&#114;&#118;&#105;&#99;&#101;&#115;&#108;&#108;&#99;&#46;&#99;&#111;&#109;';
  emailSpace.innerHTML = `<a href=mailto:${emailName}${emailSign}${emailExtension} class="mail">${emailName}${emailSign}${emailExtension} </a>`;
  navEmail.setAttribute('href', `mailto:info@cvpaintingservicesllc.com`);
}

window.onload = insertEmail;


let navBar = document.querySelector('nav');

window.addEventListener('scroll', function () {
  let navLinks = navBar.querySelectorAll('.nav_link');

  for (let i = 0; i < navLinks.length; i++) {
    if (window.scrollY > 100) {
      navBar.classList.add('solid');
      navLinks[i].classList.add('text_color');
    } else {
      navBar.classList.remove('solid');
      navLinks[i].classList.remove('text_color');
    }
  }
});

let specialService = document.querySelectorAll('.special_service');

for (let i = 0; i < specialService.length; i++) {
  specialService[i].addEventListener('click', function() {
    let specialServiceText = document.querySelectorAll('.service_hidden');
    let plusIcon = document.querySelectorAll('#plus_icon');

    specialService[i].classList.toggle('height_change');
    plusIcon[i].classList.toggle('plus_icon-rotate');
    specialServiceText[i].classList.toggle('text_appear');
  })
}


let exitBtn = document.querySelector('.exit_btn');
let modalBtn = document.querySelector('.nav_btn');

let modal = document.getElementById('modal');
let modalLink = document.querySelectorAll('.modal_link')

modalBtn.addEventListener('click', function() {
  modalBtn.classList.add('btn_hidden');
  exitBtn.classList.add('btn_appear');
  modal.classList.remove('hide_modal');
});

exitBtn.addEventListener('click', modalHide);

for (let i = 0; i < modalLink.length; i++) {
  modalLink[i].addEventListener('click', modalHide);
}

function modalHide() {
  modalBtn.classList.remove('btn_hidden');
  exitBtn.classList.remove('btn_appear');
  modal.classList.add('hide_modal');
} 