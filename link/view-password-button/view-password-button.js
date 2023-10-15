window.onload = function () {
  var input = document.getElementById("input");
  var btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    console.log(input.type);
    console.log(btn.textContent);

    if (input.type === "text") {
      // 비밀번호 숨기기
      input.type = "password";
      btn.textContent = "Show";
    } else {
      // 비밀번호 표시
      input.type = "text";
      btn.textContent = "Hide";
    }
  });
};
