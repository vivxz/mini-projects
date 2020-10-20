function plus(a: number, b: number) {
  return a + b;
}

function printResults (num: number) {
  console.log('Results: ' + num);
}

function addAndHandle (a: number, b:number, cb: (num: number) => void) {
  const results = a + b;
  cb(results);
}

printResults(plus(10, 19));

let combineValues: (a: number, b:number) => number;
combineValues = plus;
console.log(combineValues(4, 19))

addAndHandle(1, 6, (results) => {
  console.log(results);
})