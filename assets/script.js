// Assignment Code
var form = document.querySelector('#passwordGeneratorForm');
var characterAmountNumber = document.querySelector('#characterAmountNumber');
var includeUppercase = document.querySelector('#includeUppercase');
var includeNumbers = document.querySelector('#includeNumbers');
var includeSymbols = document.querySelector('#includeSymbols');
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  let lowercase =
}

generateBtn.addEventListener("click", writePassword);

form.addEventListener("submit" , e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})
