"use strict"
function armstrong()
{
    let d1;
    let d2;
    let d3;
    let sum;
    for(let i=100;i<1000;i++)
    {
    d1=Math.floor((i/1)%10);
    d2=Math.floor((i/10)%10);
    d3=Math.floor((i/100)%10);
    sum=Math.pow(d1,3)+Math.pow(d2,3)+Math.pow(d3,3);
    if(sum===i)
    console.log(i);
    }
}
armstrong();