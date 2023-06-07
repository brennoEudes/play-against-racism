function toggleMode() {
  const html = document.documentElement;
  const isFirstLoad = !localStorage.getItem('modeToggled');

  if (isFirstLoad && html.classList.contains('light')) {
    const downloadButton = document.querySelector("ul");
    const supporter1 = document.querySelector("#supporter-1");
    downloadButton.style.display = "none";
    supporter1.style.display = "none";
  }

  html.classList.toggle("light");
  localStorage.setItem('modeToggled', true);

  const img = document.querySelector("#profile img");
  const h1 = document.querySelector("#profile h1");
  const text1 = document.querySelector("#text-1 p");
  const text2 = document.querySelector("#text-2 p");
  const downloadButton = document.querySelector("ul");
  const supporter1 = document.querySelector("#supporter-1");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Martin Luther King Jr. public speech and clenched fist."
    );
    h1.textContent = "I have a dream...";
    text1.textContent = "";
    text2.textContent = "";
    downloadButton.style.display = "none";
    supporter1.style.display = "none";
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute("alt", "Vinicius Jr fist raised with hand closed.");
    h1.textContent = "...someday, we all will play against racism!";
    text1.textContent = "It is not enough to say no racism. Be anti-racist!";
    text2.textContent = "Click on the button below and play with us!";
    downloadButton.style.display = "block";
    supporter1.style.display = "block";
  }
}
