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
  const message = document.querySelector("#message p");
  const downloadButton = document.querySelector("ul");
  const supporter1 = document.querySelector("#supporter-1");

  // 4º instrução: substituir img e texto
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png"); // se light, add image light
    img.setAttribute(
      "alt",
      "Martin Luther King Jr. public speech and clenched fist."
    );
    h1.textContent = "I have a dream...";
    message.textContent = "";
    downloadButton.style.display = "none";
    supporter1.style.display = "none";
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png"); // sem light, add image dark
    img.setAttribute("alt", "Vinicius Jr fist raised with hand closed.");
    h1.textContent = "...we all play on the same team!";
    message.textContent =
      "It is not enough to say no racism. Be anti-racist! Download the free manual and play with us!";
    downloadButton.style.display = "block";
    supporter1.style.display = "block";
  }
}
