function toggleMode() {
    // 1º instrução: pegar html
    const html = document.documentElement // document é a representação do documento em formato de objeto JS. Através do ponto "." acessamos a tag html através do documentElement.
  
    // 2º instrução: troca de classes
    html.classList.toggle("light") // método JS já pronto que simplifica a condicional comentada abaixo.
  
    /* if(html.classList.contains('light')) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    } */
  
    // 3º instrução: pegar tag img
    const img = document.querySelector("#profile img") // msm do CSS
  
    // 4º instrução: substituir img
    if(html.classList.contains('light')) {
      img.setAttribute("src", "./assets/avatar-light.png"); // se light, add image light
      img.setAttribute("alt","Martin Luther King Jr. public speech and clenched fist.");
    } else {
      img.setAttribute("src", "./assets/avatar-dark.png"); // sem light, add image dark
      img.setAttribute("alt", "Vinicius Junior seriously.")
    }
  }
  