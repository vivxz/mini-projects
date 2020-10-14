var button = document.querySelector("button");
var inputA = document.getElementById("inputA");
var inputB = document.getElementById("inputB");
function add(inputA, inputB) {
  return inputA + inputB;
}
button.addEventListener("click", function () {
  console.log(add(+inputA.value, +inputB.value));
});
