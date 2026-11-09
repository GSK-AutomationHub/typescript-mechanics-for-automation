let flag:boolean = true

if(flag){
    console.log('pass');
}else{
    console.log('fail');
}

let num1:number = 10, num2:number =20

if (num1> num2){
    console.log('num1 is greater than num2');
}else{
     console.log('num2 is greater than num1');
}

let a:number = 100;
let b:number = 200;
let c:number = 300;

if(a>b && a>c){
    console.log('a is greatest number');
} else if(b > c){
    console.log('b is greatest number');
}else{
    console.log('c is greatest number');
}

// Ternary
let i:number = 10, j:number = 20
i > j ? console.log('i is greater than j') : console.log('j is greater than i')

let browser: string = 'chrome';

(browser === 'chrome')? console.log('lanuch chrome instance'):
    (browser === 'firefox')? console.log('lanuch firefox instance'):
        (browser === 'safari')? console.log('lanuch safari instance'):
            (browser === 'edge')? console.log('lanuch edge instance'): console.log('Invalid Browser')

            