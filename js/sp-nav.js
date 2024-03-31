var openSpMenu = function() {
  var overlay = document.querySelector(".js-navOverlay");
  overlay.classList.add('visible');
  var spNavBtn = document.querySelector(".js-navButton");
  spNavBtn.classList.add('sp-nav-open');
  document.body.classList.add('no_scroll');
};

var closeSpMenu = function() {
  var overlay = document.querySelector(".js-navOverlay");
  overlay.classList.remove('visible');
  var spNavBtn = document.querySelector(".js-navButton");
  spNavBtn.classList.remove('sp-nav-open');
  document.body.classList.remove('no_scroll');
};

var spNavOpenButton = document.querySelector('.p-sp__navMenu');
spNavOpenButton.addEventListener('click', openSpMenu, false);

var spNavCloseButton = document.querySelector('.p-sp__navClose');
spNavCloseButton.addEventListener('click', closeSpMenu, false);

var spCloseLinks = document.querySelectorAll('.js-sp-closeLink');
spCloseLinks.forEach(function(elem) {
  elem.addEventListener('click', closeSpMenu, false);
});
