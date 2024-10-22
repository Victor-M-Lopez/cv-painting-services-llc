let emailSpace = document.getElementById('email');

function insertEmail () {
  let emailName = '&#105;&#110;&#102;&#111;';
  let emailSign = '&#64;';
  let emailExtension = '&#99;&#118;&#112;&#97;&#105;&#110;&#116;&#105;&#110;&#103;&#115;&#101;&#114;&#118;&#105;&#99;&#101;&#115;&#108;&#108;&#99;&#46;&#99;&#111;&#109;';
  emailSpace.innerHTML = `<a href=mailto:${emailName}${emailSign}${emailExtension} class="mail">${emailName}${emailSign}${emailExtension} </a>`;
}

window.onload = insertEmail;

let specialService = document.querySelector('.special_service')
let specialService2 = document.querySelector('.special_service-2')
let specialService3 = document.querySelector('.special_service-3')
let plusIcon = document.getElementById('plus_icon');
let plusIcon2 = document.getElementById('plus_icon-2');
let plusIcon3 = document.getElementById('plus_icon-3');
let specialServiceText = document.querySelector('.service_hidden');
let specialServiceText2 = document.querySelector('.service_hidden-2');
let specialServiceText3 = document.querySelector('.service_hidden-3');

specialService.addEventListener('click', function() {
  plusIcon.classList.toggle('plus_icon-rotate');
  specialService.classList.toggle('height_change');
  specialServiceText.classList.toggle('text_appear');
})

specialService2.addEventListener('click', function() {
  plusIcon2.classList.toggle('plus_icon-rotate');
  specialService2.classList.toggle('height_change');
  specialServiceText2.classList.toggle('text_appear');
})

specialService3.addEventListener('click', function() {
  plusIcon3.classList.toggle('plus_icon-rotate');
  specialService3.classList.toggle('height_change');
  specialServiceText3.classList.toggle('text_appear');
})

