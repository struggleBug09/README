const args = process.argv;
let sumArr = (args.slice(2, 4));
let sum = 0;
for (let i = 0; i < sumArr.length; i++) {
  sum += +sumArr[i];
}
console.log(sum);