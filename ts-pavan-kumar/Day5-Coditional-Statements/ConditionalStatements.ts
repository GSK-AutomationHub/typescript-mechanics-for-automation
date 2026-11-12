//if statement

/* Syntax:
        if(condition)
        {
        //statements
        }
 */

// Example1 : If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.

let age: number = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

//if else statement

/* Syntax:
    if(condition)
        {
            Statements;
        }
    else
        {
            Statements
        }

*/

//Example 2:  Print number is even is odd

let num:number=10;

if(num%2 ==0)
{
    console.log(`${num} Even number`);
}
else
{
    console.log(`${num} Odd number`);
}

//Nested if-else Statement
/* Syntax: 
if(condition 1)
{
    statements;
}
else if(condition 2)
{
    statements;
} 
else
{
    statements;
}
    */


//Example3: Depending on the marks, display appropriate grade.
let marks:number=50;

if(marks>=90 && marks <=100)    //Condition 1
{
    console.log("Grade A");
}
else if(marks>=75 && marks<90)   // condition 2
{
    console.log("Grade B");
}
else if(marks>=60 && marks<75)  // condition 3
{
    console.log("Grade C")
}
else
{
    console.log("Grade D");
}

//Example 4: Browser selection

let browser:string ="chrome";

if(browser==="chrome")
{
    console.log("Browser is chrome");
}
else if(browser ==="firefox")
{
    console.log("Browser is firefox");
}
else if(browser ==="safari")
{
    console.log("Browser is safari")
}
else
{
    console.log("Other browser");
}

//switch-case Statement
/* Syntax:

  switch ( expression ) {
   case value1:
       // statement 1
       break;
   case value2:
       // statement 2
       break;
   case valueN:
       // statement N
       break;
   default: 
       // 
    }
*/

//Example 5 : Depending on the value of day, print the corresponding day of the week.

let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

 
// 	Example 6: The switch statement can also include an expression 
let x:number=20, y:number=5;

switch(x-y)      // expression
{
 case 0: console.log("Result Zero");   
         break;
 case 5: console.log("Result is Five")
            break;
 case 10: console.log("Result is Ten")
        break;
 default: console.log("Result is something else")
}