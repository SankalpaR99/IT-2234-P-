//Q3

function maxDigitValue(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(maxDigitValue(215));
console.log(maxDigitValue(1093));