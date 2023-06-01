export default function page() {
  const header = document.createElement("header");
  const content = document.getElementById("content");
  header.innerText = "Sora's tropeiro";
  content.appendChild(header);

  const buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");
  content.appendChild(buttons);
  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    button.innerText = `Page${i + 1}`;
    buttons.appendChild(button);
  }

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  content.appendChild(main);
}
