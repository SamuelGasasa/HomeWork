"use strict"
let num1=2154;
let num2=458;
let gcd=0;
for(let counter=0; counter<=num1 && counter<=num2;counter++){
    if(num1%counter===0 &&num2%counter===0){
        gcd=counter;
    }
}
console.log(gcd);