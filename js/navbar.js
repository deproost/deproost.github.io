// Script for side navigation
function w3_open() {
  var x = document.getElementById("sidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
function w3_close() {
  document.getElementById("sidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav(anchor) {
  var x = document.getElementById("sidenav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
  var icon = anchor.querySelector("i");
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-close');
}
