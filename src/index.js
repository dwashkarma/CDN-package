function Import() {
  let img = document.createElement("img");
  img.src = require("../assets/WFTlogo.jpg");
  let getElement = document.getElementById("logo");
  getElement.appendChild(img);
}
Import();
