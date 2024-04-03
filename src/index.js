(function () {
  let img = document.createElement("img");
  img.src = "/assets/WFTlogo.jpg";
  let getElement = document.getElementById("logo");
  getElement.innerHTML = "";
  getElement.appendChild(img);
})();
