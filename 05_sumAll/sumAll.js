const sumAll = function (firstValue, secondValue) {
    let arr = [];
    let finalSum = 0;
    if (firstValue < secondValue) {
        for (let i = firstValue; i <= secondValue; i++) {
            arr.push(i);
        }
        for (let i = 0; i < arr.length; i++) {
            finalSum += arr[i];
        }
    } else if (firstValue > secondValue) {
        for (let i = secondValue; i <= firstValue; i++) {
            arr.push(i);
        }
        for (let i = 0; i < arr.length; i++) {
            finalSum += arr[i];
        }
    }
    if (finalSum < 0 || !Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
        return "ERROR";
    }
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
