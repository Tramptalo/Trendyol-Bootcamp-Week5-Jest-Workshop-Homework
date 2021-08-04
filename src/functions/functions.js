const functions = {
  divideIt,
  convertTitleCase,
};

function divideIt(firstNumber, secondNumber) {
  let result = firstNumber / secondNumber;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error('Dividend or divisor is not a number');
  }
  if (secondNumber === 0) {
    throw new Error('Divided by Zero');
  }
  return result;
}

function convertTitleCase(title) {
  let titleCase = title
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ');

  return titleCase;
}

module.exports = functions;
