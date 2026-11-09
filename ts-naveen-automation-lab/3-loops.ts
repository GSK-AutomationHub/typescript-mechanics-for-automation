
console.log("----------- for loop with INDEX -----------")

let empNames: Array<string> =  ['tom','dick','harry','peter','john']

for(let i=0; i<empNames.length; i++){
    console.log(empNames[i])
}

console.log("----------- for loop with IN -----------")

for(let emp in empNames){
    console.log(empNames[emp])
}

console.log("----------- for loop with OF -----------")

for(let emp of empNames){
    console.log(emp)
}

