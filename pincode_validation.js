// UC 1: Restrict alphabets or special characters at the beginning

function isValidPinUC1(pin) {
    let pattern = /^[0-9][0-9\s]*$/;
    return pattern.test(pin);
}

// test cases
console.log(isValidPinUC1("400088"));
console.log(isValidPinUC1("A400088"));


// UC 2: Restrict alphabets or special characters at the end
function isValidPinUC2(pin) {
    let pattern = /^[0-9\s]*[0-9]$/;
    return pattern.test(pin);
}

// test cases
console.log(isValidPinUC2("400088")); 
console.log(isValidPinUC2("400088B")); 

// UC 3: Allow space in the middle of the PIN code
function isValidPinUC3(pin) {
    let pattern = /^[0-9]{3}\s?[0-9]{3}$/;
    return pattern.test(pin);
}

// test cases
console.log(isValidPinUC3("400088"));  
console.log(isValidPinUC3("400 088")); 
console.log(isValidPinUC3("400088B"));  
console.log(isValidPinUC3("A400088"));  


// UC 4: Ensure PIN code is exactly 6 digits, ignoring spaces
function isValidPinUC4(pin) {
    let cleanedPin = pin.replace(/\s/g, "");
    let pattern = /^[0-9]{6}$/;
    return pattern.test(cleanedPin);
}

// test cases
console.log(isValidPinUC4("400088"));  
console.log(isValidPinUC4("400 088")); 
console.log(isValidPinUC4("40008")); 
console.log(isValidPinUC4("4000888"));  
console.log(isValidPinUC4("400088B"));  
console.log(isValidPinUC4("A400088"));  