const menuItems = document.querySelectorAll(".header__menu__item");
const categorys = document.querySelectorAll(".category");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // 먼저 모든 active 제거
    menuItems.forEach((i) => i.classList.remove("active"));

    // 클릭한 것만 active 추가
    item.classList.add("active"); // focusing

    // 해당 영역으로 부드럽게 스크롤
    scrollToTarget(e.target.id.substr(3)); // to_home -> home
  });
});

categorys.forEach((category) => {
  category.addEventListener("click", (e) => {
    categorys.forEach((i) => i.classList.remove("category--selected"));

    category.classList.add("category--selected");
  });
});

function scrollToTarget(clickedId) {
  const targetElement = document.getElementById(clickedId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}
