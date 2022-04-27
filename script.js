var password = document.getElementById("password");
// const array_name = [item1, item2, ...];
var appendix = [];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "~",
  "^",
  "_",
  "}",
  "{",
  "]",
];



function generatePassword() {
  var pwLength =
  Number(prompt("Enter password length between 8 and 128 characters"));
  if (8 <= pwLength && pwLength <= 128) {
    console.log(pwLength);
    if (confirm("Should password include uppercase?") == true) {
      appendix.push(upperCase);
    }
  
    if (confirm("Should password include lowercase?") == true) {
      appendix.push(lowerCase);
    }
  
    if (confirm("Should password include numbers?") == true) {
      appendix.push(numbers);
    }
  
    if (confirm("Should password include special characters?") == true) {
      appendix.push(specialChar);
    }
  } else {
    alert("Password Must Be Between 8 and 128 Characters"); 
    }
};
console.log(appendix);


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
