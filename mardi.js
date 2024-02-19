const divy = document.querySelector(".mydiv");
console.log(divy);
for (let index = 0; index < 100; index++) {
  const dovy = document.createElement("div");
  dovy.textContent = index;
  dovy.classname = "box";
  divy.appendChild(dovy);

  if (index % 2 == 0) {
    divy.style.background = "green";
  } else if (index % 2 == !0) {
    divy.style.background = "yello";
  }
}
