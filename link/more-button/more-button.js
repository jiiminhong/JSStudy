window.onload = function () {
  var container = document.getElementById("container");
  var btn = document.getElementById("btn");
  var content = container.textContent;

  console.log(content);

  container.textContent = content.substring(0, 50) + "...";

  btn.addEventListener("click", function () {
    container.textContent = content;
    btn.remove();
  });
};
