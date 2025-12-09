var topNav = document.getElementById("topNav");

window.onscroll = function () {
  var x = window.scrollX;
  var vw = window.innerWidth;

  if (x > vw * 0.5) {
    topNav.className = "top-nav visible";
  } else {
    topNav.className = "top-nav";
  }
};