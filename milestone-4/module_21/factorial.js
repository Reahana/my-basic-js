function factorial(n){
    let result = 1;
    for(let i=1; i<=n;i++){
        result *= i;
    }
    return result;
}
let fact = factorial(5);
console.log(fact);


//reverse system
function factorialReverse(n){
    let result = 1;
    for(let i=n; i>=1; i--){
        result *= i;
    }
    return result;
}
let factRev = factorialReverse(6);
console.log(factRev);


//while loop
function factorialWhile(n){
    let num= 1;
    let result = 1;
    while(num<=n){
        result *= num;
        num++;
    }
    return result;
}
let factW = factorialWhile(7);
console.log(factW);
