// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {


    //First prompt to have user decide password length and prompt about uppercase or alert to invalid entry
    var passwordLength = window.prompt("Enter how long you want your password to be: ", "Choose a number between 8-128");
    if (passwordLength >= 8 && passwordLength <= 128) {
      var upperCaseChoice = window.confirm("Do you want uppercase letters?", "Ok = Yes / Cancel = No");

    } else {
      window.alert("Invalid entry: Please select a number between 8-128");
    }

    // second prompt to have user decide if they want uppercase letters and prompt lowercase
    if (upperCaseChoice === true || upperCaseChoice === false) {
      var lowerCaseChoice = window.confirm("Do you want lowercase letters?", "Ok = Yes / Cancel = No");
    } 

    //third prompt to have user decide if they want lowercase letters and ask about numbers
    if (lowerCaseChoice === true || lowerCaseChoice === false) {
      var numberChoice = window.confirm("Do you want numbers?", "Ok = Yes / Cancel = No");
    }

    // fourth prompt to have the user decide if they want numbers and asks if they want to include symbols
    if (numberChoice === true || numberChoice === false) {
      var symbolChoice = window.confirm("Do you want Symbols?", "Ok = Yes / Cancel = No");
    }
    


    // Get a random uppercase letter
    function generateRandomUppercase(){
      var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      return upperCaseOptions[Math.floor(Math.random() * upperCaseOptions.length)];
    }

    // Get a random lowercase letter
    function generateRandomLowercase(){
      var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz"
      return lowerCaseOptions[Math.floor(Math.random() * lowerCaseOptions.length)];
    }

    // Get a random number
    function generateRandomNumbers(){
      var numberOptions = "0123456789"
      return numberOptions[Math.floor(Math.random() * numberOptions.length)];
    }

    // Get a random symbol
    function generateRandomSymbols(){
      var symbolOptions = "'!@#$%^&*(){}[]=<>,.?-_'"
      return symbolOptions[Math.floor(Math.random() * symbolOptions.length)];
    }

    // Object to contain the random functions
    var generateRandom = {
      upperCaseChoice: generateRandomUppercase,
      lowerCaseChoice: generateRandomLowercase,
      numberChoice: generateRandomNumbers,
      symbolChoice: generateRandomSymbols
    };
    // console.log (generateRandom);
    
    

    // array to filter out the choices that weren't selected or the choice was No/False.
    var generatedArr = [{ upperCaseChoice }, { lowerCaseChoice }, { numberChoice}, { symbolChoice }].filter(item => Object.values(item)[0]);
    // console.log(generatedArr);

    
    // Variable to denote how many choices were selected by the user.
    var choiceCount = upperCaseChoice + lowerCaseChoice + numberChoice + symbolChoice;
    var generatedPassword = "";

    if (choiceCount === 0) {
      return window.alert("Error: You must select at least one option.")
    };

    for (var i = 0; i < passwordLength; i += choiceCount) {
      generatedArr.forEach(type => {
        var chosenOptions = Object.keys(type)[0];
        generatedPassword += generateRandom[chosenOptions] ();
      });
    };

    return generatedPassword;

  }
  


// Assigned a variable to the password text value to prevent the error.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



