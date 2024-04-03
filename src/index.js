(function () {
  let img = document.createElement("img");
  img.src = "../public/WFTlogo.svg";
  let getElement = document.getElementById("logo");
  getElement.innerHTML = "";
  getElement.appendChild(img);
})();
