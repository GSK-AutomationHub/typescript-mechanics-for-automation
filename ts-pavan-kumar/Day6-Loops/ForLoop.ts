// For Loop: A for loop is typically used when the number of iterations is known beforehand.


/* Syntax:


for(inilization; condition ; inc/dec)
{
 //statements;
}

*/

//Example 1:  print 1......10
/*
for(let i=1;i<=10;i++)
{
    console.log(i);
    
}
 */


//Example 2: print even numbers between 1---10

//Method1:
/*
for(let i=2;i<=10;i+=2)
{
    console.log(i);
}
*/

//Method2:
/*
for(let i=1;i<=10;i++)
    {
        if(i%2==0)
        {
            console.log(i);
        }
    }
*/

// Example 3: 10 to 1
/*
for(let i=10;i>=1;i--)
{
    console.log(i);
}
*/


//Example4:

/*
let i:number;  //global


for(i=1;i<=5;i++)
{
    console.log(i);  //1......5
}

console.log(i);//6

*/

//Example:
let i:number;

for(i=1;i<=5;i++);

console.log(i); //6


