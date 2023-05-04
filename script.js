const checkbox = document.querySelector(".mode__input");
const slider = document.querySelector(".slider");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const spanMode = document.querySelector(".mode__span");
let iconMode = document.querySelector(".fas");
const imagMode = (datatheme) => {
  image1.src = `img/undraw_conceptual_idea_${datatheme}.svg`;
  image2.src = `img/undraw_feeling_proud_${datatheme}.svg`;
  image3.src = `img/undraw_proud_coder_${datatheme}.svg`;
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
