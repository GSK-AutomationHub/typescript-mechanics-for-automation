//while loop : A while loop executes as long as the condition is true.

/*
while(condition)
{
    statements;

}
*/

//Example1: print 1.......10
/*
let i:number=1;   //Inilization

while(i<=5)    //t  t  t  t t  f
{
    console.log(i); //1  2  3 4 5
    i++;  //2  3  4  5 6
}
*/

// Example 2: print even numbers 1.....10

//Method1
/*
let i:number=2;

while(i<=10)
{
    console.log(i);
    i+=2;  //i=i+2;
}
*/

//Method2:

/*
let i:number=1;

while(i<=10)
{
    if(i%2==0)
    {
        console.log(i);
    }

    i++;
}
*/

// Example 3: print odd numbers 1.....10

//Method1:
/*let i:number=1;

while(i<=10)
{
    console.log(i);
    i+=2;  //i=i+2;
}
*/

//Method2:

/*
let i:number=1;

while(i<=10)
    {
        if(i%2!=0)
        {
            console.log(i);
        }
    
        i++;
    }
*/

// Example 4: print numbers 10 9 8 ......1

/*
let i:number=10;

while(i>=1)
{
    console.log(i);
    i--;
}
*/


//infinite loop - when the condition never become false then it will go to infinite loop
/*while(true)
{
    console.log(1);
}
*/




