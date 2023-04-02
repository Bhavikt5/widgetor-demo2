// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const lightMode = document.querySelector("#lightlogo");
const darkedMode = document.querySelector("#darklogo");

const flightMode = document.querySelector("#footerLight");
const fdarkedMode = document.querySelector("#footerDark");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");

  darkedMode.style.display = "block";
  lightMode.style.display = "none";

  fdarkedMode.style.display = "block";
  flightMode.style.display = "none";

  darkModeToggle.checked = true;
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);

  darkedMode.style.display = "none";
  lightMode.style.display = "block";

  fdarkedMode.style.display = "none";
  flightMode.style.display = "block";
  darkModeToggle.checked = false;
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
