// type assertion -> using <> and 'as'
// It way to tell tsc to avoid type infernce and explecitly assign given data type

let billAmout: any = 400;
let totalBill = <number>billAmout + 300;
console.log(totalBill);

let msg = 'hello typescript from naveen automation';
let msgLength = (msg as string).length;
console.log(msgLength);

let flag:any = true
if (flag as boolean){
    console.log("Hello TS!")
}