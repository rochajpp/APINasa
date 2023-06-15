const area = document.querySelector(".image");

const urlImage = area.getAttribute('data-value');

area.style.background = 'url(' + urlImage + ') center no-repeat';
area.style.backgroundSize = 'cover';
