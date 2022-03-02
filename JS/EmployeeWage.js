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
      empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
    console.log(empDailyWageMap);
    function totalWages(totalWage, dailyWage) {
      return totalWage + dailyWage;
    }
    console.log(
      "UC8 - Total Emp Wage: " +
        Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
    );