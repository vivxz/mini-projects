type NumStr = number | string;
type Conversion = 'as-number' | 'as-text'

function combine (
  a: NumStr, 
  b: NumStr, 
  resultsConversion: Conversion
  ) {
  let sum;
  if (typeof a === 'number' && typeof b === 'number' || resultsConversion === 'as-number'){
    sum = +a + +b;
  } else {
    sum = a.toString() + b.toString();
  }
  return sum;

  // if (resultsConversion === 'as-number'){
  //   return +(sum);
  // } else {
  //   return sum.toString();
  // }
}

const combinedFood = combine(19, 'nuggets', 'as-text');
console.log(combinedFood)