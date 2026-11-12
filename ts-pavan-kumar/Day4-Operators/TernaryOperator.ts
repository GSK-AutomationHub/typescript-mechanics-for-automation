// Ternary/conditional operator

//  ?:

//  exp ?  res1 : res2;

//Example 1
/*
let a:number=100, b:number=200;

let res:number= (a>b) ? a: b;
console.log(res);//200
*/

//Example 2:

let personAge:number=30;

let res:string= (personAge>=18)? "Adult": "Minor";
//let res:string= (personAge<18)? "Minor": "Adult";


console.log(res);  // Adult
