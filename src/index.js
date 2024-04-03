(function () {
  let img = document.createElement("img");
  img.src = "/WFTlogo.jpg";
  let getElement = document.getElementById("logo");
  getElement.innerHTML = "";
  getElement.appendChild(img);
})();
