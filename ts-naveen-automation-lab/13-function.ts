
function printMsg(): void{
    console.log("Hello TS!")
}

printMsg()

function printGreeting(greeting:string): void{
    console.log(greeting)
}

printGreeting('welcome to world of TS!')

function addnumbers(a:number, b:number): number {
    let result: number  = a + b;
    return result;
}

console.log(addnumbers(5, 7));

function verifyIsActive(userName:string): boolean{
    if(userName.toLowerCase() === 'john' || userName.toLowerCase() === 'josef'){
        return true;
    }else if(userName.toLowerCase() === 'smith'){
        return false;
    }else{
        
        return false;
    }
}

let user = 'josef'
if(verifyIsActive(user)){
   console.log('user account is active');
} else if(verifyIsActive(user)){
   console.log('user account is inactive');
} else{
    console.log('user account is expired');
}