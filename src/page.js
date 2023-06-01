export default function page() {
  const header = document.createElement("header");
  const content = document.getElementById("content");
  header.innerText = "Sora's tropeiro";
  content.appendChild(header);

  const buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");
  header.appendChild(buttons);

  const homeBtn = document.createElement("button");
  homeBtn.innerText = `Home`;
  homeBtn.setAttribute("class", "homeBtn");
  const witBtn = document.createElement("button");
  witBtn.innerText = `What is it?`;
  witBtn.setAttribute("class", "witBtn");
  const locationBtn = document.createElement("button");
  locationBtn.innerText = "Location";
  locationBtn.setAttribute("class", "locationBtn");
  buttons.appendChild(homeBtn);
  buttons.appendChild(witBtn);
  buttons.appendChild(locationBtn);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  content.appendChild(main);
}
