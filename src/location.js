export default function location() {
  const main = document.getElementById("main");
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "mainContent");

  const textDiv = document.createElement("div");
  const a1 = document.createElement("a");
  a1.innerText = "Click here to find where you can get some";
  a1.href =
    "https://www.google.com/search?client=opera-gx&hs=tZr&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=APwXEdd6NSacXsavqOw9OgyD166GcS9hhA:1685645364092&q=mineirinho&rflfq=1&num=10&ved=2ahUKEwjmkpOp3qL_AhWxGbkGHX4XB6wQtgN6BAgUEAI#rlfi=hd:;si:9104923015671127164,l,CgptaW5laXJpbmhvSIDK5dzuqoCACFoQEAAYACIKbWluZWlyaW5ob5IBD2hhbmRpY3JhZnRfZmFpcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ2NEaFBMVmxuRUFFqgFCEAEqDiIKbWluZWlyaW5obygMMh4QASIadpUFYEt7QqtzOOJU7rWr3oNhcV-8UOKe0R0yDhACIgptaW5laXJpbmhv,y,54LuLJ7Gmpw;mv:[[-19.8349962,-43.923330799999995],[-19.962882999999998,-44.0446059]]";

  textDiv.appendChild(a1);
  const p2 = document.createElement("p");
  p2.innerText = "You won't be disappointed";
  textDiv.appendChild(p2);
  textDiv.setAttribute("class", "textDiv");
  mainContent.appendChild(textDiv);

  const tropeiro = document.createElement("img");
  tropeiro.setAttribute("class", "tropeiro");
  tropeiro.src =
    "https://www.sabornamesa.com.br/media/k2/items/cache/605a5b56c8e1f29c51548653d6f1dfc8_XL.jpg";

  mainContent.appendChild(tropeiro);

  main.appendChild(mainContent);
}
