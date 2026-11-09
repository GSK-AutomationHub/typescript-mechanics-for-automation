// arrays - dynamic in nature, run time can add more values
// tupe - fix size array and order matters - sequence of type matter

let person: [string, number] = ['tom', 30_000] // initialization is strict
person.push('dick', 60_000)
console.log(person)
console.log(person[1])


let user: [string, number, boolean] = ['tom', 30_000, true]
user.push('dick', 60_000, false)
console.log(user)
console.log(user[2])

let personData: [string, number][] =  [['tom', 30_000], ['dick', 60_000]]
personData.push(['harry', 90_000])
console.log(personData)
console.log(personData[0])
console.log(personData[0][0])