// document.getElementById("title").classList.add("red");

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

// function storeNum(num) {
//     let digit = num;
//     console.log("inside storeNum");
//     return digit;
// }

// Gets numbers to display
function displayNum(num) {
    document.getElementById("display").textContent += num.value;
    
    let digit = parseFloat(document.getElementById("display").textContent);
    // console.log(digit+digit);
    console.log(digit);
    // Call other functions here to use digit.
    // storeNum(digit);
    // return digit;
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

// Clears display
function empty() {
    document.getElementById("display").textContent = "";
    // let output = document.getElementById("display");
    // console.log(output);
    // while(output.firstChild){
    //     output.removeChild(output.firstChild);
    // }
}

// Performs operations
function operate(sign) {

    let display = document.getElementById("display");

    let x = display.textContent;
    console.log(sign.value);

    display.textContent = "";

    let y = "";


    // while (y == "") {
    //     y = display.textContent;
    //     console.log(y);
    // }

    

    // let y = document.getElementById("display").textContent;

    // let x = prompt("First value: ");
    // let sign = prompt("+, -, *, or /");
    // let y = prompt("Second value: ");

    switch (sign.value) {
        case "+":
            console.log(add(x,y));
            break;
        case "-":
            console.log(subtract(x,y));
            break;
        case "*":
            console.log(multiply(x,y));
            break;
        case "/":
            console.log(divide(x,y));
            break;
        // case "=":
        //     console.log();
    }
}

// operate();

