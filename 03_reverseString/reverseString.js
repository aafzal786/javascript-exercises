const reverseString = function (string) {
    let splitString = string.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");

    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
