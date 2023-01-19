// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var characterArray = ["!","@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+"];  
    var resultArray = [];
    var userArray = [];
    
    uppercaseArray [1]
 
 var numCharacter = prompt ("How many characters would you like in precious password? (must be between 8 and 128?");
 var numbers = confirm ("Would you like numbers in your password?");
 var uppercases = confirm ("Would you like Uppercases in your password?");
 var lowercases = confirm ("Would you like lowercases in your password?");
 var characters = confirm ("Would you like special characters in your password?");
     
    if (numbers){
    resultArray = resultArray.concat(numbArray);
    }
    
    if (uppercases){
    resultArray = resultArray.concat(uppercaseArray);
    }
    
    if (lowercases){
    resultArray = resultArray.concat(lowercaseArray);
    }
    
    if (characters){
    resultArray = resultArray.concat(characterArray);
    }
    
    for (var i = 0; i < numCharacter; i++) { 
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
    return userArray.join("") ;
    }
    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);