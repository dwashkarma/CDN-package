(function () {
  let img = document.createElement("img");
  img.src =
    "https://firebasestorage.googleapis.com/v0/b/wft-footer.appspot.com/o/WFTlogo.jpg?alt=media&token=d453e725-e4f6-42ad-9db8-f01b662ea0eb";
  let getElement = document.getElementById("logo");
  getElement.innerHTML = "";
  getElement.appendChild(img);
  document.getElementsByTagName[0]("logo").style.height = "40rem";
})();
