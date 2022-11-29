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

function onLoad() {
  getpwlength();
}

function onChange() {
  getpwlength();
  generatePassword();
  writePassword();
}

function getpwlength() {
  var x = document.getElementById("includeLength").value;
  document.getElementById("pwlength").innerHTML = x;
  pwLength = x
}

// Ensure at least one tick box is selected
function changecheck(checked) {
  
    var checkboxcount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (checkboxcount < 1) {
      window.alert("Warning: At least one option is required!\nThe form will be reset.");
      location.reload();
    } else
      {  
      if (checked) {
        checked = false;
      } else {
        checked = true;
      }
}
}

// Included Password Variables.

function generatePassword() {
  var userPassword = [];
  
  //UPPER
  if (upper.checked) {
    var upperCaseArray = [];
    upperCaseArray = allowedUpper.split("");
    var upperPwd = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    //console.log(`upper letter is; ${upperPwd}`)
    } else {
    var upperCaseArray = [];
    var upperPwd = [];
  }

  //LOWER
  if (lower.checked) {
    var lowerCaseArray = [];
    lowerCaseArray = allowedLower.split("");
    var lowerPwd = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    //console.log(`upper letter is; ${lowerPwd}`)
    } else {
    var lowerCaseArray = [];
    var lowerPwd = [];
  }

  //NUMBERS
  if (nums.checked) {
    var numberCaseArray = [];
    numberCaseArray = allowedNumbers.split("");
    var numberPwd = numberCaseArray[Math.floor(Math.random() * numberCaseArray.length)];
    //console.log(`number is; ${numberPwd}`)
    } else {
    var numberCaseArray = [];
    var numberPwd = [];
  }

  //SYMBOLS
  if (symb.checked) {
    var symbolCaseArray = [];
    symbolCaseArray = allowedSymbols.split("");
    var symbolPwd = symbolCaseArray[Math.floor(Math.random() * symbolCaseArray.length)];
    //console.log(`symbol is; ${symbolPwd}`)
    }  else {
    var symbolCaseArray = [];
    var symbolPwd = [];
  }
  

  //INCLUDE 1 FROM EACH INCLUDED ELEMENT
  incPwdChar = (upperPwd +lowerPwd + numberPwd + symbolPwd);
  var concatPwdLength = (pwLength -= incPwdChar.length);
  //console.log(`this is the 1-4 digit password; ${incPwdChar}`)

  userPasswordChar = upperCaseArray.concat(lowerCaseArray,numberCaseArray,symbolCaseArray);

  console.log("password characters available are; " + userPasswordChar);
  //console.log("password length is; " + incPwdChar.length + " and " + pwLength);
      
  //INCLUDE RANDOM WITH THE REMAINING LENGTH
  createdpassword = "";

  for (var i = 0; i < concatPwdLength; i++) {
  let pwd = userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];

  createdpassword += pwd;
  //console.log(`the random password is; ${createdpassword}`);

  finalpassword = incPwdChar.concat(createdpassword);
  //console.log(`the final password is; ${finalpassword}`);

  }

}

function writePassword() {
  var password = finalpassword;
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
  return;
}