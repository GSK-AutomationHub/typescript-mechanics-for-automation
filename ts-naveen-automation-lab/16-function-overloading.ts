// TS provide function overloading
// we can have multiple fn with same name with different param & return types
// however the number of param should be the same in all fns

// we need to provide fn signature (prototype) without any implementation
// no of fn param must be the same, param & return data type ll be different
function add(a:number, b:number):number
function add(a:string, b:string):string
function add(a:boolean, b:boolean):boolean

//then provide fn implementation only once
function add(a:any, b:any):any{
    return a + b;
}

//function call
console.log(add(5, 7));
console.log(add('hello', ' world!'));
console.log(add(true, false));