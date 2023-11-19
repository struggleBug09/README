const args = process.argv;
let arrWords = args.slice(2)
for (let arrWord of arrWords) {
  let reversedWord = ""
  for (i = arrWord.length - 1; i >= 0; i--) {
    reversedWord += arrWord[i];
  }
  console.log(reversedWord);
}


//  imperative style of writing git messages