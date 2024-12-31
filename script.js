const container = document.querySelector("#container");

const body = document.body;
const h2 = document.createElement("h2");
h2.textContent = "Etch-A-Sketch";
body.insertBefore(h2, container);

const button = document.createElement("button");
button.textContent = "Set Grid";
button.addEventListener("click", () => {
  num = getNumberOfSquares();
  for (let i = 0; i < num * num; i++) createSquare(num);
});

body.insertBefore(button, container);

function getNumberOfSquares() {
  let num = +prompt("Please enter a number between 16 and 100.", 16);
  if (num >= 16 && num <= 100) return num;
  else {
    alert("Invalid input");
    console.log(num);
    console.log(typeof num);
    num = null;
  }
}

function createSquare(num) {
  let width = 600 / num;
  let height = width;
  let opac = 0;
  let square = document.createElement("div");
  square.classList.add("square");
  square.style.width = `${width}px`;
  square.style.height = `${height}px`;
  square.addEventListener("mouseover", () => {
    square.classList.add("draw");
    opac += 0.1;
    square.style.opacity = opac;
  })
  container.appendChild(square);  
}

