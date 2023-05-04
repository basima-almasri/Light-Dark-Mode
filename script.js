const checkbox = document.querySelector(".mode__input");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll("[id^='image-']");
const spanMode = document.querySelector(".mode__span");
let iconMode = document.querySelector(".fas");

const imagMode = (datatheme) => {
  images.forEach((image) => {
    image.src = `img/${image.id}_${datatheme}.svg`;
  });
};
const Mode = (datatheme) => {
  slider.style.backgroundColor = "var(--primary-color)";
  imagMode(datatheme);
  spanMode.textContent = `${datatheme} Mode`;

  datatheme === "light"
    ? iconMode.classList.replace("fa-moon", "fa-sun")
    : iconMode.classList.replace("fa-sun", "fa-moon");
};
const setAttributeMode = (mode) => {
  document.documentElement.setAttribute("data-theme", mode);
  Mode(mode);
  //   if (localStorage.getItem("theme")) {
  //     console.log("before set", localStorage.getItem("theme"));
  localStorage.setItem("theme", mode);

  localStorage.getItem("theme");
};
checkbox.addEventListener("change", function () {
  this.checked ? setAttributeMode("dark") : setAttributeMode("light");
});
const theme = localStorage.getItem("theme");
if (theme) {
  setAttributeMode(theme);
  if (theme === "dark") checkbox.checked = true;
}
