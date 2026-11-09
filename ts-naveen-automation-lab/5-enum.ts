// enum(enumeration) -> data type -> hold set of diff constant
// enum types --> numeric, string, heterogenous

console.log("-------------- Numeric Enums -------------------")

enum Browser {
    Chrome, //0
    Firefox,//1
    Safari,//2
    Edge//3
}

console.log(Browser) // reverse mapping
console.log(Browser.Chrome)
console.log(Browser.Edge)

console.log("---------------------")

enum NewBrowser {
    Chrome = 5,
    Firefox,//6
    Safari,//7
    Edge//8
}

console.log(NewBrowser) // reverse mapping
console.log(NewBrowser.Chrome)
console.log(NewBrowser.Edge)

console.log("---------------------")

enum ModifiedBrowser {
    Chrome = 5,
    Firefox= 9,
    Safari = 12,
    Edge = 30
}

console.log(ModifiedBrowser) // reverse mapping
console.log(ModifiedBrowser.Chrome)
console.log(ModifiedBrowser.Edge)

console.log("---------- Enum with Function ----------")

enum PRJBrowser {
    // Non-initialized option should appear be4 initialized
    Firefox,
    Safari = 5,
    Edge = getVersion('chrome') * 5, 
    Chrome = getVersion('chrome'),

}

function getVersion(browser){
    if(browser === 'chrome'){
        return 115
    } else{
        return -1
    }
}

console.log(PRJBrowser.Chrome);
console.log(PRJBrowser.Edge);

console.log("-------------- String Enums -------------------")

enum Environment{
    DEV = 'dev',
    QA = 'qa',
    STAGING = 'stage',
    PROD = 'prod'
}

console.log(Environment.QA)
console.log(Environment['STAGING'])

console.log("-------------- heterogenous Enums -------------------")

enum Status{
    ACTIVE = 'active',
    DEACTIVE = 0,
    PENDING,
    TERMINATED
}

console.log(Status.ACTIVE)
console.log(Status.PENDING)
console.log(Status['TERMINATED'])