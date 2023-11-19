let input = process.argv[2];

if (input) {
  console.log(reverseList(input));
}

function reverseList(original) {

  return original.split('').reverse().join('');
}
