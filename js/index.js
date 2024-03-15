var openSpMenu = function() {
  var overlay = document.querySelector(".sp-navOverlay");
  overlay.classList.add('visible');
  var spNavBtn = document.querySelector(".sp-navButton");
  spNavBtn.classList.add('sp-nav-open');
  document.body.classList.add('no_scroll');
};

var closeSpMenu = function() {
  var overlay = document.querySelector(".sp-navOverlay");
  overlay.classList.remove('visible');
  var spNavBtn = document.querySelector(".sp-navButton");
  spNavBtn.classList.remove('sp-nav-open');
  document.body.classList.remove('no_scroll');
};

var spNavOpenButton = document.querySelector('.sp-navMenu');
spNavOpenButton.addEventListener('click', openSpMenu, false);

var spNavCloseButton = document.querySelector('.sp-navClose');
spNavCloseButton.addEventListener('click', closeSpMenu, false);

var spCloseLinks = document.querySelectorAll('.sp-close-link');
spCloseLinks.forEach(function(elem) {
  elem.addEventListener('click', closeSpMenu, false);
});