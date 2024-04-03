(function () {
  let img = document.createElement("img");
  img.src = "https://cdn.jsdelivr.net/npm/cdn-package@1.0.15/dist/WFTlogo.svg";
  let getElement = document.getElementById("logo");
  getElement.innerHTML = "";
  getElement.appendChild(img);
})();
