const allowedUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allowedLower = "abcdefghijklmnopqrstuvwxyz"
const allowedNumbers = "1234567890"
const allowedSymbols = "~`!@#$%^&*()-=_+[]\{}|;':,./<>?"  //How do you add " as part of the string?

var pwLength = document.getElementById("includeLength").value;
var upper = document.getElementById("includeUpper");
var lower = document.getElementById("includeLower");
var nums = document.getElementById("includeNumbers");
var symb = document.getElementById("includeSymbols");
var generateBtn = document.querySelector("#generate");

var createdpassword = "";

generateBtn.addEventListener("click", function(event){
  event.preventDefault();
  getpwlength();
  generatePassword();
  writePassword();
  }
);

function getpwlength() {
    var x = document.getElementById("includeLength").value;
    document.getElementById("pwlength").innerHTML = x;
    pwLength = x
}

function onLoad() {
  getpwlength();
}

function onChange() {
  getpwlength();
  generatePassword();
  writePassword();
  
}
// How to ensure at least one tick box is selected
function changecheck(checked) {
  
  var checkboxcount = document.querySelectorAll('input[type="checkbox"]:checked').length
    if (checkboxcount < 1) {
      location.reload();
    } else if (checkboxcount < 2) {
      window.alert("Reminder: At least one option is required");
    } else
      {  
      if (checked) {
        checked = false;
      } else {
        checked = true;
      }
}
}

function generatePassword() {
  var userPassword = [];
  
  if (upper.checked) {
    var upperCaseArray = [];
    upperCaseArray = allowedUpper.split("");
    } else {
    var upperCaseArray = [];
  }

  if (lower.checked) {
    var lowerCaseArray = [];
    lowerCaseArray = allowedLower.split("");
    } else {
    var lowerCaseArray = [];
  }

  if (nums.checked) {
    var numberCaseArray = [];
    numberCaseArray = allowedNumbers.split("");
    } else {
    var numberCaseArray = [];
  }

  if (symb.checked) {
    var symbolCaseArray = [];
    symbolCaseArray = allowedSymbols.split("");
    }  else {
    var symbolCaseArray = [];
  }
  
  userPasswordChar = upperCaseArray.concat(lowerCaseArray,numberCaseArray,symbolCaseArray);
  
  console.log("password characters available are; " + userPasswordChar)
  console.log("password length is; " + pwLength)

  var randomItem = userPasswordChar[Math.floor(Math.random()*userPasswordChar.length)];
  
  createdpassword = "";

  for (var i = 0; i < pwLength; i++) {
  let pwd = userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];

  createdpassword += pwd;
  }
}

function writePassword() {
  var password = createdpassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  
  const alert = document.createElement("div")
  alert.classList.add("alert");
  alert.textContent = "Copied!"
  document.body.appendChild(alert)
  setTimeout(() => {
  document.querySelector('.alert').style.display = "none"
  document.body.removeChild(alert)
  }, 1000)
  return result;
}

// GIVEN I need a new, secure password ✅
// WHEN I click the button to generate a password  ✅
// THEN I am presented with a series of prompts for password criteria ✅
// WHEN prompted for password criteria ✅
// THEN I select which criteria to include in the password ✅
// WHEN prompted for the length of the password  ✅
// THEN I choose a length of at least 8 characters and no more than 128 characters ✅
// WHEN asked for character types to include in the password ✅
// THEN I confirm whether or not to include lowercase ✅, uppercase ✅, numeric ✅, and/or special characters ✅
// WHEN I answer each prompt ✅
// THEN my input should be validated and at least one character type should be selected ✅
// WHEN all prompts are answered ✅
// THEN a password is generated that matches the selected criteria ✅
// WHEN the password is generated ✅
// THEN the password is either displayed in an alert or written to the page ✅