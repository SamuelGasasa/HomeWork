// "use strict"
function happyNumber(num)
{
let firstNum;
let counter=1;
let sum=0;
let a=1;
let i=0;
let checker=[];

while((num)/10>=1)
{
    counter++;
}
while(num!==1 && checker[num] !==true)
{
    checker[num]=true;
    while(i<counter)
    {
        firstNum=Math.floor((num/1*a)%10);
        sum=sum+Math.pow(firstNum,2);
        a=a*10;
        i++;
    }  

}
if(checker[num]===true)
return true;
else
return false;
}
var cnt = 5;
var num = 1;
var f5 = '';
if(happyNumber[1]===true)
{
    console.log('hello');
} 
