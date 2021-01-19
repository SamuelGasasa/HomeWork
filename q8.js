// "use strict"
function happyNumber(num)
{
let temp=num; 
const repeat=[];
while(temp!==1 && !repeat.includes(temp)){
    repeat.push(temp);
    let sum=0;
    console.log(temp);
    while(temp>0){
        const digit=temp%10;
        sum += digit**2;
        temp=Math.floor(temp/10);
    }
    temp=sum;
}
if (temp===1){
    return true;
}
else {
    return false;
}
}
let first5='';
let count=0;
for(let i=0; i< 5;i++)
{
    while(happyNumber(count)===false){
        count++;
    }
    first5+=count +' ';
    count++;

}
console.log('the first 5 happy numbers are: ' + first5);
