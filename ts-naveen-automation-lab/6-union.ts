// variable
let userId: (string | number);
userId = "naveen";
userId = '12345';

let employeeIds: (string | number)[] =  ['emp123', 123, 'emp234', 234]

// function
function getUserInfo(customerId: (string | number)): string{
    if(typeof customerId === 'number'){
        return customerId + "_naveen";
    } else if (typeof customerId === 'string'){
        return customerId + "_naveen"
    } else{
         return customerId
    }
}

console.log(getUserInfo(9001))
console.log(getUserInfo('josef'))
console.log(getUserInfo('cust1234'))