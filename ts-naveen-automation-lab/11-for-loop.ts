//when to use for loop?
// if iteration are definite / fix
// dropdown handling
// array element handling


for(let i=0; i<=5; i++){
    console.log(i)
}

console.log("-------------------")

for(let i=0; i<=10; i+=2){
    console.log(i)
}

console.log("-------------------")

let arr = [10, 200, 3000, 40000, 500000]

for(let number of arr){
    console.log(number)
}

console.log("-------------------")

for(let number in arr){
    console.log(arr[number])
}

console.log("-------------------")

let message = "hello world"

for(let charc of message){
    //console.log(charc)
    process.stdout.write(charc)
}
