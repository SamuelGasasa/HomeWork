let num1=-5;
let num2=-2;
let num3=-6;
let num4=0;
let num5=-1;
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log('the largest number is '+num1);
}
else {
    if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
        console.log('the largest number is '+num2);
    }
    else{
        if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
            console.log('the largest number is '+num3);
        }
        else{
            if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
                console.log('the largest number is '+num4);
            }
            else{
                console.log('the largest number is '+num5);
            }
        }
    }
}