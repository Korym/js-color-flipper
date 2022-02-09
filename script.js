const btn = document.getElementById("change-color");
const colorDisplay = document.getElementById('colorDisplay');
const simple = document.getElementById("simple");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");
const root = document.querySelector(":root");
let simplepage = true;
let rgbpage = false;
let hexpage = false;
const simpleColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "brown", "aqua"];

function getRand(max = simpleColors.length) {
  let num;
  if (simplepage) {
    num = Math.floor(Math.random() * max);
    return num;
  } else if (rgbpage) {
    num = Math.floor(Math.random() * max) + 1;
    return num;
  } else {
    num = Math.floor(Math.random() * max).toString(16);
  }
  return num;
}

function buildColor() {
  let color;
  if (simplepage) {
    color = simpleColors[getRand()];
  } else if (rgbpage) {
    color = `rgb(${getRand(255)}, ${getRand(255)}, ${getRand(255)})`;
  } else {
    color = `#${getRand(16)}${getRand(16)}${getRand(16)}${getRand(16)}${getRand(16)}${getRand(16)}`
  }
  return color;
}

simple.addEventListener('click', () => {
  hex.style.textDecoration = "none";
  simple.style.textDecoration = "underline";
  rgb.style.textDecoration = "none";
  simplepage = true;
  hexpage = false;
  rgbpage = false;
})
rgb.addEventListener('click', () => {
  hex.style.textDecoration = "none";
  simple.style.textDecoration = "none";
  rgb.style.textDecoration = "underline";
  simplepage = false;
  hexpage = false;
  rgbpage = true;
})
hex.addEventListener('click', () => {
  hex.style.textDecoration = "underline";
  simple.style.textDecoration = "none";
  rgb.style.textDecoration = "none";
  simplepage = false;
  hexpage = true;
  rgbpage = false;
})

btn.addEventListener('click', () => {
  let newcolor = buildColor();
  root.style.setProperty("--bg-color", newcolor);
  // console.log(newcolor)
  colorDisplay.innerText = newcolor;
})
