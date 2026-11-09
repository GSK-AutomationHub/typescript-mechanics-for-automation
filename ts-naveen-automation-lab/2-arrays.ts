
let names: string[] = ['tom','dick','harry','peter','john']
console.log(names[3])

// Generics
let empNames: Array<string> =  ['tom','dick','harry','peter','john']
let empIds : Array<number> =  [1,2,3,4,5]
let empInfo : Array<any> =  [1,'tom',true,30_000,'apple','qa']

console.log(empNames[3])
console.log(empIds[3])
console.log(empInfo[3])

// multi type arrays
let values1 : (string | number) [] = ["tom", 30000, "joe", 60000, "peter", 90000]
console.log(values1)

let values2 : Array<string | Boolean> = ["tom", true, "joe", false]
console.log(values2)