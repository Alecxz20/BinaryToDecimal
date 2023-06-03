const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const btn = document.querySelector("button");
const error = document.querySelector("span");

function binaryToDecimal() {
  let result = 0;
  const arrNum = binary.value.split("");
  let value = 1;

  for (let i = arrNum.length - 1; i >= 0; i--) {
    if (parseInt(arrNum[i]) === 1) {
      result += value;
      value *= 2;
    } else {
      value *= 2;
    }
  }

  decimal.value = result;
}

binary.addEventListener("input", function () {
  if (
    binary.value[binary.value.length - 1] !== "0" &&
    binary.value[binary.value.length - 1] !== "1"
  ) {
    error.textContent = `You can only type "0" or "1"`;
    error.classList.add("show");
    let str = binary.value.slice(0, -1);
    binary.value = str;
  } else {
    error.classList.remove("show");
  }
});

btn.addEventListener("click", binaryToDecimal);
