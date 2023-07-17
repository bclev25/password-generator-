// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  while (true) {
  var length = prompt ("Enter the desired length of your password between 8 and 128 characters):");
  length = parseInt(length); 

  if (!isNaN(length) && length >= 8 && length <= 128) {
    break;
  }

  alert ("invalid length! Please enter a number between 8 and 128");
  }

  var includeUppercase = confirm("Include uppercase characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeNumbers = confirm("Include numbers");
  var includeSpecialChars = confirm("Include special characters?");

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+=[]{}|\;:<>,.?/";


  var selectedChars = "";

  if (includeLowercase) {
    selectedChars += lowercaseChars;
  }
  if (includeUppercase) {
    selectedChars += uppercaseChars;
  }
  if (includeNumbers) {
    selectedChars += numberChars;
  }
  if (includeSpecialChars) {
    selectedChars += specialChars;
  }

  if (selectedChars === "") {
    alert("You must select at least one character set.");
    return "";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.charAt(randomIndex);
  }

  return password;

}