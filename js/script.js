function toggleMenu() {
  var nav = document.getElementById('nav');
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
  } else {
    nav.classList.add('open');
  }
}
