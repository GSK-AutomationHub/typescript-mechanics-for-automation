// 1. push
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

// 2. pop
let arr2 = [10, 20, 30];
arr2.pop();
console.log(arr2);

// 3. shift
let arr3 = [5, 6, 7];
arr3.shift();
console.log(arr3);

// 4. unshift
let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4);

// 5. concat
let arr5a = [1, 2];
let arr5b = [3, 4];
let combined = arr5a.concat(arr5b);
console.log(combined);

// 6. slice
let arr6 = [10, 20, 30, 40, 50];
let sliced = arr6.slice(1, 4);
console.log(sliced);

// 7. splice
let arr7 = [100, 200, 300, 400];
arr7.splice(2, 1, 350);
console.log(arr7);

// 8. indexOf
let arr8 = ['apple', 'banana', 'cherry'];
console.log(arr8.indexOf('banana'));

// 9. includes
let arr9 = [5, 10, 15];
console.log(arr9.includes(10));

// 10. toString
let arr10 = [1, 2, 3];
console.log(arr10.toString());

// 11. forEach
let arr11 = ['a', 'b', 'c'];
arr11.forEach(item => console.log(item));

// 12. map
let arr12 = [1, 2, 3];
let doubled = arr12.map(num => num * 2);
console.log(doubled);

// 13. filter
let arr13 = [1, 2, 3, 4, 5];
let evens = arr13.filter(num => num % 2 === 0);
console.log(evens);

// 14. reduce
let arr14 = [10, 20, 30];
let sum = arr14.reduce((acc, val) => acc + val, 0);
console.log(sum);

// 15. some
let arr15 = [1, 3, 5, 6];
console.log(arr15.some(num => num % 2 === 0));

// 16. every
let arr16 = [2, 4, 6];
console.log(arr16.every(num => num % 2 === 0));

// 17. remove duplicates
let arr17 = [1, 2, 2, 3, 3, 4];
let unique = arr17.filter((item, index) => arr17.indexOf(item) === index);
console.log(unique);


// 18. reverse
let arr19 = [1, 2, 3];
arr19.reverse();
console.log(arr19);


// 19. string length
let str21 = "Hello World";
console.log(str21.length);

// 20. toUpperCase
let str22 = "typescript";
console.log(str22.toUpperCase());

// 21. toLowerCase
let str23 = "TYPESCRIPT";
console.log(str23.toLowerCase());

// 22. charAt
let str24 = "Pavan";
console.log(str24.charAt(2));

// 23. indexOf
let str25 = "I love coding in TypeScript";
console.log(str25.indexOf("coding"));

// 24. includes
let str26 = "Beginner TypeScript Guide";
console.log(str26.includes("Guide"));

// 25. startsWith
let str27 = "Welcome to TS";
console.log(str27.startsWith("Welcome"));

// 26. endsWith
let str28 = "Learning TypeScript";
console.log(str28.endsWith("Script"));

// 27. replace
let str29 = "I love JavaScript";
console.log(str29.replace("JavaScript", "TypeScript"));

// 28. split + trim
let str30 = "   Hello World from TypeScript   ";
let words = str30.trim().split(" ");
console.log(words);
