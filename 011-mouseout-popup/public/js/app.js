const show = () => {
  const element = document.querySelector("#popup");
  element.style.visibility = "visible";
  element.style.opacity = "1";
  element.style.transform = "scale(1)";
  element.style.transition = "0.4s, opacity 0.4s";
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mouseout", (event) => {
    if (!event.toElement && !event.relatedTarget) {
      setTimeout(() => {
        show();
      }, 200);
    }
  });
});
