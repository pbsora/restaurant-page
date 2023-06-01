export default function wit() {
  const main = document.getElementById("main");
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "mainContent");

  const textDiv = document.createElement("div");
  const p1 = document.createElement("p");
  p1.innerText = "What is it?";
  textDiv.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerText =
    "If you like Brazilian food, this one is for you: Feijão Tropeiro. A traditional dish from Minas Gerais, made with beans, bacon, sausage, collard greens, eggs and manioc flour.  ";
  textDiv.appendChild(p2);
  const p3 = document.createElement("p");
  p3.innerText =
    "Feijão Tropeiro is traditionally served with white rice and torresmos (fried pork cracklings). It sometimes acts as the “side dish”.";
  textDiv.appendChild(p3);
  const p4 = document.createElement("p");
  p4.innerText =
    "Whether you are a Brazilian living far from home, the spouse or significant other of a Brazilian living far from home who wants to cook something nice for your loved one, or just someone who is intrigued to try Feijão Tropeiro, I am 100% sure you will love this!";
  textDiv.appendChild(p4);
  textDiv.setAttribute("class", "textDiv");
  mainContent.appendChild(textDiv);

  main.appendChild(mainContent);
}
