const topNav = document.getElementById("topNav");

document.addEventListener("scroll", () => {
  const scrollX = window.scrollX;
  const viewportWidth = window.innerWidth;

  if (scrollX > viewportWidth * 0.5) {
    topNav.classList.add("visible");
  } else {
    topNav.classList.remove("visible");
  }
});
