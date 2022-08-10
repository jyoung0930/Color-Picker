import req from "./req.js";
const URL = "https://www.thecolorapi.com/scheme";
const form = document.querySelector("form");

// Load initial colors from inputs
req(URL);

// Get input colors on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  req(URL);
});


