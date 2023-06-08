function toggleMode() {
  // 1º instrução: pegar html
  const html = document.documentElement; // document é a representação do documento em formato de objeto JS. Através do ponto "." acessamos a tag html através do documentElement.

  // 2º instrução: troca de classes
  html.classList.toggle("light"); // método JS já pronto que simplifica a condicional comentada abaixo.

  /* if(html.classList.contains('light')) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    } */

  // 3º instrução: pegar tags
  const img = document.querySelector("#profile img"); // msm do CSS
  const h1 = document.querySelector("#profile h1");
  const text1 = document.querySelector("#text-1 p");
  const text2 = document.querySelector("#text-2 p");
  const mainButton1 = document.querySelector("ul");
  const mainButton2 = document.querySelector("ul li a");
  const supporter1 = document.querySelector("#supporter-1");
  const supporter2 = document.querySelector("#supporter-1 img");

  // 4º instrução: substituir img e textos
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png"); // se light, add image light
    img.setAttribute(
      "alt",
      "Martin Luther King Jr. public speech and clenched fist."
    );
    h1.textContent = "I have a dream...";
    text1.textContent = "";
    text2.textContent = "";
    mainButton1.style.display = "none";
    supporter1.style.display = "none";
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png"); // sem light, add image dark
    img.setAttribute("alt", "Vinicius Jr fist raised with hand closed.");
    h1.textContent = "...someday, we all will play against racism!";
    text1.textContent = "It is not enough to say no racism. Be anti-racist!";
    text2.textContent = "Click on the button below and play with us!";
    mainButton1.style.display = "block";
    mainButton2.setAttribute("src", "");
    supporter1.style.display = "block";
    supporter2.setAttribute("src", "./assets/vini-jr-foundation-logo.svg");
  }
}
