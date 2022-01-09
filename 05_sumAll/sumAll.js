const sumAll = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
  if (a < 0 || b < 0) return 'ERROR';
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else if (b > a) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a === b) {
    return a + b;
  } else {
    return 'ERROR';
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
