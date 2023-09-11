const tombol = document.querySelector("#warna");

tombol.addEventListener("click", () => {
  document.body.classList.toggle("basing");
});
tombol.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "green";
});

const Tbutton = document.createElement("button");
const TextButtuon = document.createTextNode("AJEB AJEB");
Tbutton.appendChild(TextButtuon);
Tbutton.setAttribute("type", "button");
tombol.after(Tbutton);

Tbutton.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  console.log(g);
  console.log(b);
  document.body.style.backgroundColor = `rgb(` + r + `,` + g + `,` + b + `)`;
});

const sMerah = document.querySelector("input[name=sMerah]");
const sBiru = document.querySelector("input[name=sBiru]");
const sHijau = document.querySelector("input[name=sHijau]");
sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  console.log(r);
  console.log(g);
  console.log(b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  console.log(r);
  console.log(g);
  console.log(b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  console.log(r);
  console.log(g);
  console.log(b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener("mousemove", function (event) {
  const xpos = Math.round((event.clientX / window.innerWidth) * 255);
  const ypos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xpos},${ypos},100)`;
});

// document.body.addEventListener("mousemove", function (event) {
//   const xpos = Math.round((event.clientX / window.innerWidth) * 255);
//   const ypos = Math.round((event.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = `rgb(${xpos},${ypos},100)`;
// });
