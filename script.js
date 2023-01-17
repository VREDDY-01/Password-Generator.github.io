//Variables

const PwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");
const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|/";


//Functions
const getLowercase = () => {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

const getUppercase = () => {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

const getNumber = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

const getSymbol = () => {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

const generatePassword = () => {
  const len = lenEl.value;
  let password = "";
  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }
  PwEl.innerText = password;
}

const generateX = () => {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }
  if (lowerEl.checked) {
    xs.push(getLowercase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0)
    return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

//Main Logic

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = PwEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy")
  textarea.remove();
  copyEl.style.backgroundColor="#ffb937"
  copyEl.innerText="Copied!"
});