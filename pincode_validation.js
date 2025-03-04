// UC 1: Restrict alphabets or special characters at the beginning

function isValidPinUC1(pin) {
    let pattern = /^[0-9][0-9\s]*$/;
    return pattern.test(pin);
}

// test cases
console.log(isValidPinUC1("400088"));
console.log(isValidPinUC1("A400088"));

