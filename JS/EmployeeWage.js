//Uc6 Ability to calculate the total wage and total worlking Hr in month using the function
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
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
function calcDailyWage(empHrs) {
  return empHrs * Working_Per_Hr;
}
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHr(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
  empDailyHrsMap.set(totalWorkingDays, empHrs);
  empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
const findTotal = (totalVal, dailyVal) => {
  return totalVal + dailyVal;
};
let totalHours = Array.from(empDailyHrsMap.values()).filter((dailyHours) => dailyHours > 0).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter((dailyWage) => dailyWage > 0).reduce(findTotal, 0);
console.log(
  "UC9A - Emp Wage with Arrow. " +"\n\tTotal Hours: " +totalHours +", Total Wages: " +totalSalary
);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
  if (value == 8) fullWorkingDays.push(key);
  else if (value == 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});
console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);