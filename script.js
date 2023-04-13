// Assignment Code
var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

form.addEventListener("submit" , e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})
