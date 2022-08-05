



confirmCriteria = function() {
  var userPrefs = {
    uppercase: window.confirm('Would you like to include UPPERCASE LETTERS in your password? If so, click "OK" If not, click "CANCEL"'),
    lowercase: window.confirm('Would you like to include LOWERCASE LETTERS in your password? If so, click "OK" If not, click "CANCEL"'),
    number: window.confirm('Would you like to include NUMBERS in your password? If so, click "OK" If not, click "CANCEL"'),
    symbol: window.confirm('Would you like to include SYMBOLS in your password? If so, click "OK" If not, click "CANCEL"'),
    length: window.prompt('How many characters would you like your password to be? Choose a number between 8-128.'),
  }
  if (userPrefs.uppercase === false && userPrefs.lowercase === false && userPrefs.number === false && userPrefs.symbol === false) {
    window.alert('You must select at least one character type, please reload the page and try again.')
  }
  else if (userPrefs.length < 8 || userPrefs.length > 128) {
    window.alert('You have chosen a password length that not within the accepted range 8-128 characters. Please refresh the page and try again.')
  }
  else (console.log('yay'))
  return userPrefs
  verifiedRun()
}


//confirmCriteria()

var extendoString = ''
var randomUppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomLowercaseString = 'abcdefghijklmnopqrstuvwxyz';
var randomNumberString = '0123456789';
var randomSymbolString = '!@#$%^&*()_+';



function addUppercase(userPrefs) {
  if (userPrefs.uppercase == true) {extendoString = (extendoString +randomUppercaseString)}
}
// addUppercase()


function addLowercase(userPrefs) {
  if (userPrefs.lowercase == true) {extendoString = extendoString +randomLowercaseString}
}
//addLowercase()


function addNumber(userPrefs) {
  if (userPrefs.number == true) {extendoString = extendoString +randomNumberString}
}
//addNumber()


function addSymbol(userPrefs) {
  if (userPrefs.symbol == true) {extendoString = extendoString +randomSymbolString}
}
//addSymbol()


function makeRandom(userPrefs) {
  var newRandom = ''
  var characters = extendoString
   for(var i, i = 0; i < userPrefs.length; i++) {
    newRandom += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return newRandom
}
//makeRandom()


function generatePassword() {
  //confirmCriteria()
  var criteria = confirmCriteria()
  addUppercase(criteria)
  addLowercase(criteria)
  addNumber(criteria)
  addSymbol(criteria)
  var password = makeRandom(criteria)
  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




