let button = document.querySelector("input");
let functionToExecute = () => {
  //This function will run only when an event is triggered
  alert("ya Abdelghani ana boubou kbiiiiiiiir ");
};
let changeBackground = (event) => {
  let elt = event.target;
  console.log({ elt });
  //The element we hovered our mouse on
  elt.style.backgroundColor = "#655DBB";
};
let revealTheText = () => {
  let textToReveal = document.querySelector('div[id="hidden-text"]');
  console.log(textToReveal);
  //We can simply toggle the class in and out whenever we click on it.
  textToReveal.classList.toggle("hidden");
};

//button.addEventListener("click", functionToExecute);
// button.addEventListener("mouseover", changeBackground);
button.addEventListener("click", revealTheText);
