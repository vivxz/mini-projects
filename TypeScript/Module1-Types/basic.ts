function add (a: number, b: number, c: boolean, phrase: string) {
  const sum = a + b;
  if (c) {
    console.log(phrase + sum)
  } else {
    return a + b
  }
}

const number1 = 10;
const number2 = 19;
const bool = true;
const phrase = 'Results is: '

const results = add(number1, number2, bool, phrase);