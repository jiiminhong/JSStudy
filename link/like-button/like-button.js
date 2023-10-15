window.onload = function () {
  var btn = document.getElementById("btn");
  var count = document.getElementById("count");
  var likes = false;

  btn.addEventListener("click", function () {
    console.log(likes);

    if (likes) {
      // 좋아요 취소
      btn.classList.remove("active");
      count.textContent = parseInt(count.textContent) - 1;
      likes = false;
    } else {
      // 좋아요 누름
      btn.classList.add("active");
      count.textContent = parseInt(count.textContent) + 1;
      likes = true;
    }
  });
};
