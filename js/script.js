let secondNum;
let eraseDisplay = false;
let correct = false;
const text = [];

// Basic math functions
function add(x, y) {
    let a = parseFloat(x);
    let b = parseFloat(y);
    return a + b;
}

function subtract(x, y) {
    let a = parseFloat(x);
    let b = parseFloat(y);
    return a - b;
}

function multiply(x, y) {
    let a = parseFloat(x);
    let b = parseFloat(y);
    return a * b;
}

function divide(x, y) {
    let a = parseFloat(x);
    let b = parseFloat(y);
    if (b === 0) {y
        return "Error! Divided by zero."
    } else {
        return a / b;
    }
}

// Gets numbers to display
function displayNum(num) {
    let display = document.getElementById("display");
    if (eraseDisplay) {
        display.textContent = "";
        eraseDisplay = false;
    }
    display.textContent += num.value;
    if (num.value == ".")
    {
        correct = true;
        document.getElementById("display").addEventListener("click", isDecimal(correct));
    }

}

// Backspace function, erases last digit
function erase() {

    let display = document.getElementById("display").textContent;
    console.log(display);

    let text = display.toString();
    console.log(text);
    let erased = text.slice(0, -1);
    console.log(erased);
    let num = parseFloat(erased);

    document.getElementById("display").textContent = num;

}

// Disable decimal button
function isDecimal(correct) {
    let btn = document.getElementById("decimal");
    if(correct) {
        btn.disabled = true;
    } else if (!correct) {
        btn.disabled = false;
    }
}

// Clears display
function empty() {
    document.getElementById("display").textContent = "";
    emptyArray();
    isDecimal(false);
}

function emptyArray() {
    text.length = 0;
}

// Append text to array
function addToArray() {
    let display = document.getElementById("display");
    let floatDisplay = parseFloat(display.textContent);

    // In case user presses signs with no numbers
    for(let j = 0; j < 3; j++) {
        if((isNaN(text[0]) && !text[0])) {
            delete text[0];
        } else if (text[1] == "="){
            delete text[1];
        } else if ((isNaN(text[2]) && !text[2])){
            delete text[2];
        };
    }

    let i;
    for(i = 0; i < text.length; i++) {
        if(text[i] === undefined) {
            text.splice(i, 1, floatDisplay);
            break;
        };
    };

    if (i === text.length) {
        text.push(floatDisplay);
    }
}

// Performs operations
function operate(sign) {

    let display = document.getElementById("display");

    // Add digits and signs to array
    addToArray();
    
    if (!isNaN(text[1])) {
        delete text[1];
    }
    // Check if no sign is in the array
    if (!text[1] && sign.value != "=") {
        display.textContent = "";
        text[1] = sign.value;
    } else if (!text[3] && text.length >=3) {
        text.push(sign.value);
    }

    console.log(text[0]);
    console.log(text[1]);
    console.log(text[2]);
    
    let x = text[0];
    
    let y = text[2];
    // Perform calculations depending on sign
    if (text.length >= 3 && text[1] == "+") {
        console.log(add(x,y));
        secondNum = add(x,y);
        display.textContent = secondNum;
    } else if (text.length >= 3 && text[1] == "-") {
        console.log(subtract(x,y));
        secondNum = subtract(x,y);
        display.textContent = secondNum;
    } else if (text.length >= 3 && text[1] == "*") {
        console.log(multiply(x,y));
        secondNum = multiply(x,y);
        display.textContent = secondNum;
    } else if (text.length >= 3 && text[1] == "/") {
        console.log(divide(x,y));
        secondNum = divide(x,y);
        display.textContent = secondNum;
    }
    
    // If last sign pressed is not "equal sign" save it in newSign;
    let newSign;
    if (text[3] == "=") {
        if(secondNum % 1 != 0) {
            display.textContent = parseFloat(secondNum).toFixed(2);
        } else {
            display.textContent = secondNum;
        }
    } else if (text[3] == "+") {
        newSign = "+";
    } else if (text[3] == "-") {
        newSign = "-";        
    } else if (text[3] == "*") {
        newSign = "*";        
    } else if (text[3] == "/") {
        newSign = "/";
    }
    console.log(text[3]);

    // Delete first item of array
    if(text[3] == "=") {
        emptyArray();
        eraseDisplay = true;
    }

    // Replace contents of array with new content.
    if (text.length >= 3) {
        emptyArray();
        text[0] = secondNum;
        text[1] = newSign;
        console.log(newSign);
        eraseDisplay = true;
    }



    isDecimal(false);
}
