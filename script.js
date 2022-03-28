function burgerMenu() {
  const iconMenu = document.querySelector('.icon-menu')
  const menuBody = document.querySelector('.menu__body')
  const links = document.querySelectorAll('.menu__list li')

  function toggleMenu() {
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle('_active');
    // document.body.classList.toggle('_lock');
  }
  iconMenu.addEventListener("click", (e) => {
    toggleMenu()
  })
  links.forEach.call(links, function (el) {
    el.addEventListener("click", () => toggleMenu());
  });
}

burgerMenu();


console.log('%cСамопроверка задания:', 'color: #fecb00; font-weight: 700')
console.log(`
- [x] выполнены требования к репозиторию [50/50]
- [x] выполнены требования к коммитам и Pull Request [50/50]
`);
console.log('%cИтого: ', 'color: #fecb00; font-weight: 700', '100/100')