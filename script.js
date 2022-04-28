var password = document.getElementById("password");
// const array_name = [item1, item2, ...];
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
  var numChar = Number(prompt("Enter password length between 8 and 128 characters"));
  if (8 <= numChar && numChar <= 128) {
    if (confirm("Should password include uppercase?") == true) {
      var ups = (upperCase);
    }
  
    if (confirm("Should password include lowercase?") == true) {
      var downs = (lowerCase)
    }
  
    if (confirm("Should password include numbers?") == true) {
      var nums = (numbers);
    }
  
    if (confirm("Should password include special characters?") == true) {
      var spec = (specialChar);
    }
  } else {
    alert("Password Must Be Between 8 and 128 Characters"); 
    }

  var appendix = [].concat(ups, downs, nums, spec);
  
  var shuffle = appendix.sort(() => 0.5 - Math.random());
  var pick = shuffle.slice(0, numChar);
  console.log(pick);
  var password = pick.join("");
  return password;
};




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
