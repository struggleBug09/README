const args = process.argv;
let passwordInput = args[2];

const obfuscate = function(passLetters) {
  let newPass = "";
  for (let passLetter of passLetters) {
    switch (passLetter) {
    case "a":
      newPass += "4";
      break;
    case "e":
      newPass += "3";
      break;
    case "o":
      newPass += "0";
      break;
    case "l":
      newPass += "1";
      break;
    default:
      newPass += passLetter;
    }
  }

  console.log(newPass);
  return newPass;
};

obfuscate(passwordInput);