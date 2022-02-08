const btn = document.getElementById("change-color");
const colorDisplay = document.getElementById('colorDisplay');
const simple = document.getElementById("simple");
const rgba = document.getElementById("rgba");
const hex = document.getElementById("hex");
const root = document.querySelector(":root");
let simplepage = true;
let rgbapage = false;
let hexpage = false;
const simpleColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "brown", "aqua"];

function getRand() {
  let num;
  if (simplepage) {
    num = Math.floor(Math.random() * (simpleColors.length));
    return num;
  } else if (rgbapage) {
    num = Math.floor(Math.random() * 255) + 1;
    return num;
  } else {
    num = Math.floor(Math.random() * 16).toString(16);
  }
  return num;
}

function buildColor() {
  let color;
  if (simplepage) {
    color = simpleColors[getRand()];
  }
  return color;
}

simple.addEventListener('click', () => {
  hex.style.textDecoration = "none";
  simple.style.textDecoration = "underline";
  rgba.style.textDecoration = "none";
  simplepage = true;
  hexpage = false;
  rgbapage = false;

  // console.log(colors[num], num);

})
// rgba.addEventListener('click', () => {
//   hex.style.textDecoration = "none";
//   simple.style.textDecoration = "none";
//   rgba.style.textDecoration = "underline";
// })
// hex.addEventListener('click', () => {
//   hex.style.textDecoration = "underline";
//   simple.style.textDecoration = "none";
//   rgba.style.textDecoration = "none";
// })

btn.addEventListener('click', () => {
  let newcolor = buildColor();
  root.style.setProperty("--bg-color", newcolor);
  // console.log(newcolor)
  colorDisplay.innerText = newcolor;
})
