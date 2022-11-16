const button = document.querySelector("#luckyButton");
const dob = document.querySelector("#birth-date");
const number = document.querySelector("#lucky-number");
const result = document.querySelector("#output");
const errorMessage = document.querySelector("#error");

function calculateSum(date) {
  let sum = 0;
  date = date.replaceAll("-", "");
  //console.log(typeof date);
  let dateArray = date.split("");
  dateArray.map((val) => {
    sum = sum + parseInt(val);
  });
  return sum;
}
function calculateLuckyBirth(sum, luckyNumber) {
  //console.log(typeof number);
  if (sum % luckyNumber == 0) {
    result.innerText = "Your birthday is lucky 🚀";
  } else {
    result.innerText = "Your birthday is not lucky 🤒";
  }
}
button.addEventListener("click", () => {
  errorMessage.innerText = "";
  let luckyNumber = parseInt(number.value);
  let date = dob.value;
  if (!date) {
    return errorMessage.innerText = "Enter birthdate";
  }
  if (luckyNumber <= 0 || luckyNumber == 0 || !luckyNumber) {
    return errorMessage.innerText = "Invalid lucky Number";
  }
  let sum = calculateSum(date);
  calculateLuckyBirth(sum, luckyNumber);
});