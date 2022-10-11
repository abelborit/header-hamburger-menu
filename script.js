/* ****************************** Menú ****************************** */
(() => {
  const $panelBtn = document.getElementById("header-panel-btn");
  const $panel = document.getElementById("header-panel");
  const $panelMenu = document.getElementById("header-panel-menu");
  const $main = document.getElementById("main");

  $panelBtn.addEventListener("click", (e) => {
    $panelBtn.firstElementChild.classList.toggle("none");
    $panelBtn.lastElementChild.classList.toggle("none");
    $panel.classList.toggle("is-active");
  });

  $panelMenu.addEventListener("click", (e) => {
    if (e.target.matches(".header-panel-menu a")) {
      e.preventDefault();
      $panelBtn.firstElementChild.classList.remove("none");
      $panelBtn.lastElementChild.classList.add("none");
      $panel.classList.remove("is-active");
    } else {
      return false;
    }
  });

  $main.addEventListener("click", (e) => {
    if ($panel.classList.contains("is-active")) {
      $panelBtn.firstElementChild.classList.remove("none");
      $panelBtn.lastElementChild.classList.add("none");
      $panel.classList.remove("is-active");
    } else {
      return false;
    }
  });
})();
