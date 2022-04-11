var password=document.getElementById("password");
// const array_name = [item1, item2, ...];
     const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
     const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
     const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
     const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "~", "^", "_", "}", "{", "]"]
     const appendix = []
     //concatenate each string then restrict to var lenght value

function generatePassword()

  //collect user specifications
  {
      
    var upperAns = window.confirm("Should password include uppercase?")
      if ( upperAns=true ) {
        appendix.concat(upperCase)
        console.log(appendix)
      }
      var lowerAns = window.confirm("Should password include lowercase?")
      if ( lowerAns=true ) {
        appendix.concat(lowerCase)
        console.log(appendix)
      }
      var numAns = window.confirm("Should password include numbers?")
      if ( numAns=true ) {
        appendix.concat(numbers)
        console.log(numbers)
      }
      var specAns = window.confirm("Should password include special characters?")
      if ( specAns=true ) {
        appendix.concat(specialChar)
        console.log(appendix)
      }
  var length = Number(window.prompt("How many characters should the password be?"))
  console.log(length)

    if (8 < length < 128) {
    alert("Thank you!")
    }
    else {
      alert("Password Must Be Between 8 and 128 Characters")
    }
  }
      
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  