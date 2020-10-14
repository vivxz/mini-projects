const button = document.querySelector("button");
const inputA = document.getElementById("inputA")! as HTMLInputElement; 
const inputB = document.getElementById("inputB")! as HTMLInputElement;

function add(inputA: number, inputB: number) {
  return inputA + inputB;
}

button.addEventListener("click", function () {
  console.log(add(+inputA.value, +inputB.value));
})