export default function home() {
  const main = document.getElementById("main");
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "mainContent");

  const textDiv = document.createElement("div");
  const p1 = document.createElement("p");
  p1.innerText = "The best dish from my hometown";
  textDiv.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerText = "The capital of Minas Gerais";
  textDiv.appendChild(p2);
  textDiv.setAttribute("class", "textDiv");
  mainContent.appendChild(textDiv);

  const mineirinho = document.createElement("img");
  mineirinho.setAttribute("class", "mineirinho");
  mineirinho.src =
    "https://s2.glbimg.com/BIJgsfG3NV062OIHWCgMVYjzzxQ=/0x0:1500x1001/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/H/r/5ioJApRzGP5i75ZQWp2Q/mineirinho-cobucci.jpg";
  mainContent.appendChild(mineirinho);

  main.appendChild(mainContent);
}
