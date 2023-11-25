const args = process.argv;
let diceRolls = args.slice(2);

const randomSix = function() {
  return (Math.floor(Math.random() * 6 + 1));
};
const rollDice = function(num) {
  let diceResult = "";
  for (let i = 0; i < num; i++) {
    if (i === num - 1) {
      diceResult += randomSix();
    } else {
      diceResult += randomSix() + ", ";
    }
  }
  console.log(`Rolled ${num} dice: ${diceResult}`);
  return;
};

rollDice(diceRolls);