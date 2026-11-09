
console.log("-------------- Any ----------------------------- ")

// variable
let customerId: any
customerId = 1234;
customerId = 'newCustomer';
customerId = true

// function
function operateOnParams(a: any, b:any): any{
    return a + b
}

console.log(operateOnParams('QA', ' Automation'));
console.log(operateOnParams(5, 7));
console.log(operateOnParams(true, false));

console.log("-------------- Void ----------------------------- ")

let userId: void = undefined // initialization to only 'undefined' possible with void

function userInfo(msg: string): void{
    console.log(msg)
    return; // blank return possible with fn return type void
}

userInfo('hello typescript!')

console.log("-------------- Never ----------------------------- ")

let nothing: never; // we can not assigned any value including null, undefined here

function throwError(errorMsg : string): never{
    throw new Error(errorMsg);
    // return; --> even blank return not possible with never
}

throwError('never data type even do not accept null & undefined')