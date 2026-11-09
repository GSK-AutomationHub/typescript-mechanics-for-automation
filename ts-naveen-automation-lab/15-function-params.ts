// function can have default param but that should not appear first

function userInfo(name:string, age:number): string{
    return name + ' '+ 'is of age' + ' ' + age;
}

console.log(userInfo('john', 36));

function userMsg(name:string, msg:string = 'welcome'): string{
    return msg + ', ' + name +'!'
}

console.log(userMsg('john'));
console.log(userMsg('john', 'hello'));
console.log(userMsg('john', undefined));