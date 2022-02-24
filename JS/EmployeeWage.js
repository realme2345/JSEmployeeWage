//Uc4 Ability to calculate the Daily wage and EmpHr using the function
const Is_FullTime=1;
const Is_PartTime=2;
const Part_Time_Hr=4;
const Full_Time_Hr=8;
const Working_Per_Hr=20;
let totalEmployeeWage=0;
let empHr=0;
function getWorkingHr(empCheck)
{
    switch(empCheck)
    {
       case Is_FullTime:
            return Full_Time_Hr;
        case Is_PartTime:
            return Part_Time_Hr;
        default:
            return 0;
    }
}
const NUM_WORKING_DAYS=20;
for(let day=0;day<NUM_WORKING_DAYS;day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHr=empHr+getWorkingHr(empCheck);
}
 totalEmployeeWage=Working_Per_Hr*empHr;
console.log("Total Hrs :" + empHr +"     " + "EmpWage" + totalEmployeeWage);    

