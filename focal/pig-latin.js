const args = process.argv;
let arrWords = args.slice(2);
let ans = "";
for (let arrWord of arrWords) {
  let pigWord = "";
  for (let i = 1; i < arrWord.length; i++) {
    pigWord += arrWord[i];
  }
  pigWord += arrWord[0];
  if (arrWord === arrWords[arrWords.length - 1]) {
    pigWord += "ay";
  } else {
    pigWord += "ay ";
  }
  ans += pigWord;
}
console.log(ans);
