import page from "./page.js";
import wit from "./wit-tab.js";
import home from "./home-tab.js";
import location from "./location.js";
import "./style.css";

page();
home();

const homeBtn = document.querySelector(".homeBtn");
const witBtn = document.querySelector(".witBtn");
const locationBtn = document.querySelector(".locationBtn");

const buttons = document.getElementById("buttons");
buttons.addEventListener("click", (event) => {
  const main = document.getElementById("mainContent");
  if (event.target == homeBtn) {
    main.remove();
    home();
  } else if (event.target == witBtn) {
    main.remove();
    wit();
  } else if (event.target == locationBtn) {
    main.remove();
    location();
  }
});
