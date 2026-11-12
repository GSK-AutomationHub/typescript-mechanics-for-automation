
/////  While Loop   //////


// 1. Sum of first 10 natural numbers
let sum: number = 0;
let i: number = 1;
while (i <= 10) {
    sum = sum + i; // Add i to sum
    i = i + 1; // Increase i by 1
}
console.log("Sum of first 10 natural numbers:", sum);

// 2. Factorial of a given number
let num: number = 5; // Change this value to test
let factorial: number = 1;
let j: number = num;
while (j > 1) {
    factorial = factorial * j; // Multiply factorial by j
    j = j - 1; // Decrease j by 1
}
console.log("Factorial of", num, "is:", factorial);

// 3. Reverse a given number
let numberToReverse: number = 12345;
let reversedNumber: number = 0;
while (numberToReverse > 0) {
    let digit: number = numberToReverse % 10; // Get last digit
    reversedNumber = reversedNumber * 10 + digit; // Append digit
    numberToReverse = Math.floor(numberToReverse / 10); // Remove last digit
}
console.log("Reversed Number:", reversedNumber);

// 4. Check if a number is prime
let primeNumber: number = 29;
let isPrime: boolean = true;
let k: number = 2;
while (k * k <= primeNumber) { // Check up to square root of number
    if (primeNumber % k === 0) {
        isPrime = false; // If divisible, not prime
        break;
    }
    k = k + 1; // Increase k
}
console.log(primeNumber, "is", isPrime ? "a prime number" : "not a prime number");

// 5. Find the largest digit in a given number
let numberToCheck: number = 987654;
let largestDigit: number = 0;
while (numberToCheck > 0) {
    let digit: number = numberToCheck % 10; // Get last digit
    if (digit > largestDigit) {
        largestDigit = digit; // Update largest digit
    }
    numberToCheck = Math.floor(numberToCheck / 10); // Remove last digit
}
console.log("Largest digit:", largestDigit);

// 6. Check if a number is a palindrome
let palindromeNumber: number = 12121;
let originalNumber: number = palindromeNumber;
let reversedPalindrome: number = 0;
while (palindromeNumber > 0) {
    let digit: number = palindromeNumber % 10; // Get last digit
    reversedPalindrome = reversedPalindrome * 10 + digit; // Append digit
    palindromeNumber = Math.floor(palindromeNumber / 10); // Remove last digit
}
if (originalNumber === reversedPalindrome) {
    console.log(originalNumber, "is a palindrome");
} else {
    console.log(originalNumber, "is not a palindrome");
}



//////   Do-While Loop    //////



// 7. Print numbers from 1 to 10 using a do-while loop
let num: number = 1;
do {
    console.log(num);
    num++;
} while (num <= 10);

// 8. Perform basic arithmetic operations until the user chooses to exit
let userChoice: string;
let num1: number;
let num2: number;
let result: number;
let operation: string;

do {
    // Taking user input (mocked here since TypeScript doesn't support prompt directly)
    num1 = 10; // Example value
    num2 = 5;  // Example value
    operation = "+"; // Example operation (can be "+", "-", "*", "/")

    switch (operation) {
        case "+":
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            } else {
                console.log("Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operation.");
    }

    // Mock user choice (replace with actual input handling in a real app)
    userChoice = "n"; // "y" to continue, "n" to exit

} while (userChoice === "y");




/////////    For Loop   ///////////


// 9. Print Multiples of 5 from 5 to 50
for (let i: number = 5; i <= 50; i += 5) {
    console.log(i);
}

// 10. Print Prime Numbers between 1 and 50
for (let num: number = 2; num <= 50; num++) {
    let isPrime: boolean = true;
    for (let j: number = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// 11. Print Sum of Even Numbers between 1 and 20
let sumEven: number = 0;
for (let i: number = 2; i <= 20; i += 2) {
    sumEven += i;
}
console.log(sumEven);

// 12. Print Sum of Odd Numbers between 1 and 20
let sumOdd: number = 0;
for (let i: number = 1; i <= 20; i += 2) {
    sumOdd += i;
}
console.log(sumOdd);

// 13. Print Table of 7
for (let i: number = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 14. Print Numbers Divisible by 3 and 5 from 1 to 100
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// 15. Count Number of Digits in a Number
let num: number = 12345;
let count: number = 0;
for (let n: number = num; n > 0; n = Math.floor(n / 10)) {
    count++;
}
console.log(count);

// 16. Find Sum of Digits in a Number
let sumDigits: number = 0;
for (let n: number = num; n > 0; n = Math.floor(n / 10)) {
    sumDigits += n % 10;
}
console.log(sumDigits);

// 17. Print Multiples of 7 between 1 and 100
for (let i: number = 7; i <= 100; i += 7) {
    console.log(i);
}

// 18. Calculate the sum of all even numbers from 1 to N
let N: number = 50; // Example value for N
let sumEvenN: number = 0;
for (let i: number = 2; i <= N; i += 2) {
    sumEvenN += i;
}
console.log(sumEvenN);



//////////    Continue  //////////////


// 19: Print odd numbers from 1 to 20 using a for loop
let num1: number;
for (num1 = 1; num1 <= 20; num1++) {
    if (num1 % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(num1);
}

// 20: Print numbers from 1 to 30, skipping multiples of 5 using a while loop
let num2: number = 1;
while (num2 <= 30) {
    if (num2 % 5 === 0) {
        num2++;
        continue; // Skip multiples of 5
    }
    console.log(num2);
    num2++;
}



//////////  break  //////////////////

// 21: Find and print the first even number between 1 and 10
let firstEven: number;

for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        firstEven = i;
        console.log("First even number:", firstEven);
        break; // Exit loop once the first even number is found
    }
}

// 22: Print numbers from 1 to 30 but stop when a number greater than 15 is found
for (let num: number = 1; num <= 30; num++) {
    if (num > 15) {
        break; // Exit loop when number is greater than 15
    }
    console.log(num);
}








































