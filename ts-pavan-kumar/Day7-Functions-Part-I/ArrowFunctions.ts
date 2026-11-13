///// Arrow Functions/Lamda Function

/* Lambda refers to anonymous functions in programming. 
   Lambda functions are a concise mechanism to represent anonymous functions. 
   These functions are also called as Arrow functions.


  There are 3 parts to a Lambda function.

  1.Parameters − A function may optionally have parameters
  2.The fat arrow notation/lambda notation (=>) − It is also called as the "goes to operator"
  3.Statements − represent the functions instruction set

  Syntax:

    let variable = (parameters) => 
    {
        // block of code
    }

    variable();

*/

// Example 1: Arrow Function with No Parameters and No Return Type

/*
let greet=():void =>
{
console.log("Hello TypeScript");
}

greet();
*/

// Example 2: Arrow Function with Parameters and a Return Type

/*
let add=(a:number, b:number):number =>
{
    return a+b;
}

console.log(add(10,20));

*/


// Example 3: Arrow Function with Implicit Return

/*
let add=(a:number, b:number):number =>a+b;
let multiply=(a:number, b:number):number =>a*b;

console.log(add(10,20));
console.log(multiply(10,20))
*/ 



// Example 4: Arrow Function with Optional Parameters

let displayDetails=(id:number, name:string, mailId?:string): void =>
{
    console.log("ID:",id);
    console.log("Name:",name);
    if(mailId !==undefined )
    {
    console.log("Email:", mailId);
    }
}

displayDetails(123,"Scott","scot@gmail.com");
displayDetails(123,"Scott");


// Example 5: Arrow Function with Default Parameters

/*
let calculateDiscount=(price:number, rate:number=0.50):void =>
{
        let discount:number=price*rate;
        console.log("Discount Amount:", discount);
}

calculateDiscount(1000,0.30);
calculateDiscount(1000);

*/

// Example 6: Arrow Function with Rest Parameters

/*
let findElements=(...elements:(number | string)[]):number =>
{
    return elements.length;
}

console.log(findElements(3,"john",2,1,"scott")); //5
console.log(findElements(10,20,30,40,50,60,70)); //7
console.log(findElements("abc","xyz")); //2
*/