// Method Overloading and Constructor Overloading in TypeScript

class Calculator
{

    //Constructor overloading
    constructor();   // default constructor
    constructor(a:number, b:number);  // parameterized constructor

    constructor(a?:number, b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log("Sum of a & b: ",(a+b));
        }
        else{
            console.log("Defualt constructor called...")
        }
    }

    //Method overloading

    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined)
        {
            return a+b+c;   
        }
        return a+b;
    }


}

//Usage

//Constructor overloading
let calc1=new Calculator();
let calc2=new Calculator(10,20);

//Method overloading
console.log("Adding 2 numbers from s1:",calc1.add(10,20));
console.log("Adding 3 numbers from s1:",calc1.add(10,20,30));


console.log("Adding 2 numbers from s2:",calc2.add(10,20));
console.log("Adding 3 numbers from s2:",calc2.add(10,20,30));


