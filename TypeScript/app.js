function add(a, b, c, phrase) {
    var sum = a + b;
    if (c) {
        console.log(phrase + sum);
    }
    else {
        return a + b;
    }
}
var number1 = 10;
var number2 = 19;
var bool = true;
var phrase = 'Results is: ';
var results = add(number1, number2, bool, phrase);
