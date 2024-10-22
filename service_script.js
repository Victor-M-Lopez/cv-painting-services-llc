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
