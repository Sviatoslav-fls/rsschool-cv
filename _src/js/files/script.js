



function burgerMenu() {
  const iconMenu = document.querySelector('.icon-menu')
  const menuBody = document.querySelector('.menu__body')
  const links = document.querySelectorAll('.menu__list li')

  function toggleMenu() {
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle('_active');
    // document.body.classList.add('_lock');
  }
  iconMenu.addEventListener("click", (e) => {
    toggleMenu()
  })
  links.forEach.call(links, function (el) {
    el.addEventListener("click", () => toggleMenu());
  });
}

burgerMenu();