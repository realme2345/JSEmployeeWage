//Uc5 Ability to calculate the total wage and total worlking Hr in month using the function
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
function calculateDailyWage(empHr)
{
    return empHr*Working_Per_Hr;
}
const NUM_WORKING_DAYS=20;
const WORKING_HR_PER_MONTH=160;
let totalWorkingDays=0;
let totalEmpHrs=0;
let empDailyWageArr=new Array();
while(totalEmpHrs<=WORKING_HR_PER_MONTH && totalWorkingDays<NUM_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    empHr=getWorkingHr(empCheck);
    //console.log("WorkingDay:"+totalWorkingDays + " " + "EmpHrs :" + getWorkingHr(empCheck));
    totalEmpHrs+=empHr;
    empDailyWageArr.push(calculateDailyWage(empHr));
}
totalEmployeeWage=calculateDailyWage(totalEmpHrs);
console.log("Total Working Days"+totalWorkingDays)
console.log("Total Hrs :" + totalEmpHrs +"     " + "EmpWage :" + totalEmployeeWage);    

