let emailSpace = document.getElementById('email');

function insertEmail () {
  let emailName = '&#105;&#110;&#102;&#111;';
  let emailSign = '&#64;';
  let emailExtension = '&#99;&#118;&#112;&#97;&#105;&#110;&#116;&#105;&#110;&#103;&#115;&#101;&#114;&#118;&#105;&#99;&#101;&#115;&#108;&#108;&#99;&#46;&#99;&#111;&#109;';
  emailSpace.innerHTML = `<a href=mailto:${emailName}${emailSign}${emailExtension} class="mail">${emailName}${emailSign}${emailExtension} </a>`;
}

window.onload = insertEmail;