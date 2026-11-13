
let numbers: number[]=[1,2,3,4,5];
let fruites: string[]=["apple","banana","orange","mango"];

console.log("Numbers array:", numbers); //[ 1, 2, 3, 4, 5 ]
console.log("Fruites array:", fruites); //[ 'apple', 'banana', 'orange', 'mango' ]

//length - attribute (Not a method)

console.log("Size of numbers array:",numbers.length); //5
console.log("Size of fruites array:",fruites.length); //4


// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)

numbers.push(6,7);
console.log("After push():", numbers); // [1,2,3,4,5,6,7]


// 2. pop() - Removes the last element from an array
// Syntax: array.pop()

let lastFruite=fruites.pop();
console.log("After pop():", fruites);  //[ 'apple', 'banana', 'orange' ]
console.log("Removed Fruite is:",lastFruite);  //mango



// 3. shift() - Removes the first element from an array
// Syntax: array.shift()

let firstNumber=numbers.shift();

console.log("After shift()", numbers);  //[ 2, 3, 4, 5, 6, 7 ]
console.log("Removed Number:",firstNumber);  //1


// 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)

fruites.unshift("kiwi","pear");
console.log("After unshift():", fruites); //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]


// 5. concat() - Combines two or more arrays of same type
// Syntax: array.concat(array1, ..., varrayN)

let combinedArray=numbers.concat( [8,9],[10] )
console.log("Concatenated array:", combinedArray); //[2, 3, 4,  5, 6, 7, 8, 9, 10]



// 6. slice() - Extracts a section of an array
// Sarting Index starts from Zero
// Ending Index will be exclussive. Ex: If 3 is Ending Index It will consider 2   (3-1=2)
// Syntax: array.slice(start, end)

//let extractedArray=fruites.slice(1,3);
//console.log("After Slice():", extractedArray); //[ 'pear', 'apple' ]


let extractedArray=fruites.slice(2,5);
console.log("After Slice():", extractedArray); //[ 'apple', 'banana', 'orange' ]


// 7. splice() - Adds/removes elements from an array(From everywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

console.log("Current elements in fruites array:", fruites); //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

//Ex1: only removing

let removedElements=fruites.splice(1,2);  // here 1 is startign index, 2 is represent how many elements to be removed
console.log("After slice(1,2): ",fruites ); //[ 'kiwi', 'banana', 'orange' ]
console.log("Removed Elements: ",removedElements) //[ 'pear', 'apple' ]

//Ex2: not removed but added

fruites.splice(1,0,'pipneapple','grape');
console.log("After slice(1,0,'pipneapple','grape'): ",fruites );  //[ 'kiwi', 'pipneapple', 'grape', 'banana', 'orange' ]

//Ex3:  both remove and add
fruites.splice(1,2,"mango","cherry");
console.log(" After splice(1,2,'mango','cherry'):", fruites); //[ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]



// 8. indexOf() - Finds the index of an element, If element not found then return -1
// Syntax: array.indexOf(searchElement)   (or)  array.indexOf(searchElement,Starting Index)

//Ex 1
let bananaIndex=fruites.indexOf("banana");
console.log("Index of banana:",bananaIndex ); //3


//Ex 2 
let papayaIndex=fruites.indexOf("papaya");
console.log("Index of Papaya:" ,papayaIndex);  -1


//Ex3
bananaIndex=fruites.indexOf("banana",2);
console.log("Index of banana:",bananaIndex );  //3


// 9. includes() - Checks if an element exists
//Returns True or false
// Syntax: array.includes(searchElement, fromIndex)

let isAppleExist=fruites.includes('apple');
console.log("Does fruites include apple?",isAppleExist );  //false


let isBananaExist:boolean=fruites.includes('banana');
console.log("Does fruites include apple?",isBananaExist );  //true


// 10. toString() - Converts array to string
// Syntax: array.toString()


console.log(numbers);  //[ 2, 3, 4, 5, 6, 7 ]

let numbersString:string=numbers.toString();
console.log("Converted Array To String: ",numbersString); //2,3,4,5,6,7


let myarray:string []=['w','e','l','c','o','m','e']
console.log("Original myarray: ", myarray);

let str:string=myarray.toString();
console.log("converted string: ", str); //w,e,l,c,o,m,e


// =========  forEach(), map(), filter(), reduce(), some(), every() ==============


