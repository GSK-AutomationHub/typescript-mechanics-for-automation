// variables
let firstName: string = "naveen";
let salary: number = 60_00000;
let isEmployeed: Boolean = true;
let newCompany: null = null;
let newBoss: undefined = undefined;

// objects
interface user {
    name: string;
    age: number;
    isEmployeed?: Boolean
}

let abhay:user = {
    name: "abhay",
    age: 36,
    isEmployeed: true

}

 console.log(abhay)

// functions

function getJobProfile(): void{
    console.log("an seasioned QA Professional")
}

function multifpyNmbers(num1: number, num2: number): number{
    return num1 * num2
}

console.log(multifpyNmbers(5, 7))

function addition( a, b){
    return a + b
}
console.log(addition(5, 7));

