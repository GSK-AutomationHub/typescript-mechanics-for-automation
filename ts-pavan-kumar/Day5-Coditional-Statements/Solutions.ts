//// if Statement Programs

// Program 1: Check if a character is uppercase
let ch1: string = 'A';
if (ch1 >= 'A' && ch1 <= 'Z') {
    console.log(`${ch1} is an uppercase letter.`);
}

// Program 2: Check if a number is a multiple of 10
let num1: number = 30;
if (num1 % 10 === 0) {
    console.log(`${num1} is a multiple of 10.`);
}


//// if..else Statement Programs

// Program 3: Check if a person is a teenager (age between 13 and 19)
let age1: number = 16;
if (age1 >= 13 && age1 <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are not a teenager.");
}

// Program 4: Compare two numbers and print the larger one
let a1: number = 5, b1: number = 10;
if (a1 > b1) {
    console.log(`${a1} is larger.`);
} else {
    console.log(`${b1} is larger.`);
}

// Program 5: Check if a number is positive, negative, or zero
let num2: number = -3;
if (num2 > 0) {
    console.log(`${num2} is positive.`);
} else if (num2 < 0) {
    console.log(`${num2} is negative.`);
} else {
    console.log(`${num2} is zero.`);
}

// Program 6: Check if a person is eligible for a senior citizen discount (age >= 60)
let age2: number = 65;
if (age2 >= 60) {
    console.log("You are eligible for a senior citizen discount.");
} else {
    console.log("You are not eligible for a senior citizen discount.");
}


//// Nested if Statement Programs

// Program 7: Check if a number is positive and even
let num3: number = 8;
if (num3 > 0) {
    if (num3 % 2 === 0) {
        console.log(`${num3} is positive and even.`);
    }
}

// Program 8: Check if a character is an uppercase vowel
let ch2: string = 'A';
if (ch2 >= 'A' && ch2 <= 'Z') {
    if (ch2 === 'A' || ch2 === 'E' || ch2 === 'I' || ch2 === 'O' || ch2 === 'U') {
        console.log(`${ch2} is an uppercase vowel.`);
    }
}

// Program 9: Find the largest of three numbers
let a2: number = 5, b2: number = 8, c2: number = 3;
if (a2 > b2 && a2 > c2) {
    console.log(`${a2} is the largest.`);
} else if (b2 > c2) {
    console.log(`${b2} is the largest.`);
} else {
    console.log(`${c2} is the largest.`);
}

// Program 10: Check if a number is a multiple of both 5 and 10
let num4: number = 50;
if (num4 % 5 === 0) {
    if (num4 % 10 === 0) {
        console.log(`${num4} is a multiple of both 5 and 10.`);
    }
}

// Program 11: Check if a character is a vowel or consonant
let ch3: string = 'E';
if (ch3 === 'a' || ch3 === 'e' || ch3 === 'i' || ch3 === 'o' || ch3 === 'u') {
    console.log(`${ch3} is a vowel.`);
} else {
    if (ch3 === 'A' || ch3 === 'E' || ch3 === 'I' || ch3 === 'O' || ch3 === 'U') {
        console.log(`${ch3} is a vowel.`);
    } else {
        console.log(`${ch3} is a consonant.`);
    }
}

// Program 12: Check if a number is divisible by both 2 and 3
let num5: number = 12;
if (num5 % 2 === 0) {
    if (num5 % 3 === 0) {
        console.log(`${num5} is divisible by both 2 and 3.`);
    } else {
        console.log(`${num5} is divisible by 2 but not by 3.`);
    }
} else {
    if (num5 % 3 === 0) {
        console.log(`${num5} is divisible by 3 but not by 2.`);
    } else {
        console.log(`${num5} is not divisible by either 2 or 3.`);
    }
}

//// switch Statement Programs

// Program 13: Print the corresponding month name for a given month number
let month1: number = 5;
switch (month1) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// Program 14: Perform basic arithmetic operations based on user input
let operator: string = '+';
let a3: number = 10, b3: number = 5;
switch (operator) {
    case '+':
        console.log(`Result: ${a3 + b3}`);
        break;
    case '-':
        console.log(`Result: ${a3 - b3}`);
        break;
    case '*':
        console.log(`Result: ${a3 * b3}`);
        break;
    case '/':
        console.log(`Result: ${a3 / b3}`);
        break;
    default:
        console.log("Invalid operator");
}

// Program 15: Print the season based on the month number
let month2: number = 4;
switch (month2) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}