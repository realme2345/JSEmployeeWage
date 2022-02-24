//Uc2 Ability to calculate the Daily wage
const Is_FullTime=1;
const Is_PartTime=2;
const Working_Per_Hr=20;
let totalEmployeeWage=0;
let empHr=0;
let empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case Is_FullTime:
        empHr=8;
        break;
    case Is_PartTime:
        empHr=4;
        break;
    default:
        empHr=0;
        break;
}
totalEmployeeWage=Working_Per_Hr*empHr;
console.log("Totala Employee Wage :" + totalEmployeeWage);    

