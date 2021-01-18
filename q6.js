"use strict"
let grades=[['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]];
let avrg=0;
for(let i=0 ; i<grades.length ; i++){
avrg+=grades[i][1];

}
avrg=avrg/grades.length;
if(avrg<60)
{
console.log('F');
}
else{
    if(avrg<70){
        console.log('D');
    }
    else{
        if(avrg<80){
            console.log('C');
        }
        else{
            if(avrg<90){
                console.log('B');
            }
            else{
                console.log('A');
            }
        }
    }
}

