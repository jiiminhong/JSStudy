window.onload = function () {
  var hot = document.getElementById("hot");
  var iced = document.getElementById("iced");
  var hot_menu = document.getElementById("hot-menu");
  var iced_menu = document.getElementById("iced-menu");

  // 아이스 버튼 클릭
  iced.addEventListener("click", function () {
    // 버튼
    iced.classList.add("active");
    hot.classList.remove("active");
    // 내용
    hot_menu.classList.add("hidden");
    iced_menu.classList.remove("hidden");
  });

  // 핫 버튼 클릭
  hot.addEventListener("click", function () {
    // 버튼
    hot.classList.add("active");
    iced.classList.remove("active");
    // 내용
    iced_menu.classList.add("hidden");
    hot_menu.classList.remove("hidden");
  });
};
