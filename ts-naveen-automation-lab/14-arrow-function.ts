
let info = ():void =>{
    console.log("this is arrow function")
}
info();

let fnInfo = (msg:string) => console.log(msg)
fnInfo("this is arrow function");

let sum = (x:number, y:number):number => x + y;
console.log(sum(5, 7));