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
    totalEmpHrs+=empHr;
    empDailyWageArr.push(calculateDailyWage(empHr));
}
totalEmployeeWage=calculateDailyWage(totalEmpHrs);
// console.log("Total Working Days"+totalWorkingDays)
// console.log("Total Hrs :" + totalEmpHrs +"     " + "EmpWage :" + totalEmployeeWage);    
let totEmpWage = 0;
  function sum(dailyWage) {
    totEmpWage += dailyWage;
  }
  empDailyWageArr.forEach(sum);
  console.log("UC7A- Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs +" Emp Wage: " + totEmpWage );

  function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }
  console.log(
    "UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages)
  );
  //UC UC7B - Show the day along with Daily Wage using Array Map Helper Function
  console.log("UC7B - day along with Daily Wage ");
  let dailyCntr = 0;
  function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
  }
  let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
  console.log(mapDayWithWageArr);
//UC 7C - Show Days when Full Time Wage of 160 were earned
   function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
  console.log("UC7C - Daily Wage Filter When FullTime Wage is Earned");
  console.log(fullDayWageArr);
 // UC 7D:- Find the first occurences when Full Time Wage was earned using find function
 function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  console.log(
    "UC7D - First time Fulltime wage was earned on Day: " +
      mapDayWithWageArr.find(findFulltimeWage)
  );
// UC 7E:- Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  console.log(
    "UC7E - Check All Element have Full Time Wage: " +
      fullDayWageArr.every(isAllFulltimeWage)
  );
  // UC 7F:- Check if there is any Part Time Wage
  function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
  }
  console.log(
    "UC7F - Check if there is any Part Time Wage: " +
      mapDayWithWageArr.some(isAnyPartTimeWage)
  );
   // UC 7G:- Find the number of days the Employee Worked
   function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
  }
  console.log(
    "UC 7G - Number of Days Emp Worked: " +
      empDailyWageArr.reduce(totalDaysWorked, 0)
  );
