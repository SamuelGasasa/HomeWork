let num1= 0;
let num2= -1;
let num3= 4;
if(num1>num2 && num1>num3 && num2>num3){
    console.log(num1,num2,num3);
}
else{
    if(num2>num1 && num2>num3 && num1>num3){
        console.log(num2,num1,num3);
    }
    else{
        if(num1>num2 && num1>num3 && num2<num3){
            console.log(num1,num3, num2);
        }
        else{
            if(num3>num1 && num3>num2 && num1>num2){
                console.log(num3,num1,num2);
            }
            else{
                if(num2>num1 && num2>num3 && num1<num3){
                    console.log(num2,num3,num1);
                }
                else{
                    console.log(num3,num2,num1);
                }
            }
        }
    }
}
// switch(num1,num2,num3){
//     case (num1>num2) && (num1>num3) && (num2>num3):
//         console.log(num1,num2,num3);
//         break;
    
//     case (num2>num1) && (num2>num3) && (num1>num3):
//         console.log(num2,num1,num3);
//         break;
    
//     case (num1>num2) && (num1>num2) && (num2<num3):
//         console.log(num1,num3, num2);
//         break;
    
//     case num3>num1 && num3>num2 && num1>num2:
//         console.log(num3,num1,num2);
//         break;
    
//     case num2>num1 && num2>num3 && num1<num3:
//         console.log(num2,num3,num1);
//         break;
    
//     case num3>num1 && num3>num2 && num1<num2:
//         console.log(num3,num2,num1);
//         break;
// }
// אשמח לדעת למה זה לא עובד