function getSum(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        const element = numbers[i];
         if(element%2!=0){
            sum = sum + element;
         }
     
    }
   return sum;
}

const myNumbers = [1,3,25,40,62,43,6,8,100,1];
let result = getSum(myNumbers);
console.log(result);