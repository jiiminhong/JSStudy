window.onload = function () {
  var btn = document.getElementById("btn");

  window.addEventListener("scroll", function () {
    var scrollTop = document.documentElement.scrollTop;

    // 뷰포트탑과 문서 탑 사이의 거리
    console.log(scrollTop);

    if (scrollTop > 200) {
      // 버튼을 보이기
      btn.classList.remove("hidden");
    } else {
      // 버튼 숨기기
      btn.classList.add("hidden");
    }
  });

  // 탑버튼 클릭
  btn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
};
