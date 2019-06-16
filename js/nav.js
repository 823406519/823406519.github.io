const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');

nav.addEventListener('click', function() {
  overlay.style.width = '100%';
});

close.addEventListener('click', function() {
  overlay.style.width = '0%';
});
