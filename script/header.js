document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.href;
  const headerMenu = document.querySelector(".header__menu");
  const headerMenuModal = document.querySelector(".header__menu-modal");
  // Получаем все элементы списка меню
  const menuItems = document.querySelectorAll(".header__modal-item");
  // Перебираем элементы и проверяем URL
  menuItems.forEach(function (item) {
    // Получаем ссылку внутри каждого пункта
    const link = item.querySelector(".header__modal-link");

    // Получаем URL из ссылки
    const itemUrl = link.href;

    // Сравниваем текущий URL с URL пункта меню
    if (currentUrl.includes(itemUrl)) {
      item.classList.add("header__modal-item--active");
    }
  });
  headerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    headerMenu.classList.toggle("header__menu--active");
    const burgerMenu = document.querySelector("#burger-menu");
    headerMenuModal.classList.toggle("header__menu-modal--active");
    if (headerMenu.classList.contains("header__menu--active")) {
      burgerMenu.src = "icons/shared/close_burger.svg";
    } else {
      burgerMenu.src = "icons/shared/drop-down.svg";
    }
  });
});
