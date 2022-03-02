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
  let empDailyHrsAndWageArr = new Array();
  while (totalEmpHrs <= MAX_HRS_IN_MONTH &&totalWorkingDays < NUM_OF_WORKING_DAYS) 
  {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHr(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
      dayNum: totalWorkingDays,
      dailyHours: empHrs,
      dailyWage: calculateDailyWage(empHrs),
      toString() {
        console.log ("\nDay" + this.dayNum +" => Working Hours is " + this.dailyHours +" And Wage Earned = " +this.dailyWage);
    },
    });
  }
  console.log(
    "\nUC10 Showing Daily Hours Worked and Wage Earned: " +
      empDailyHrsAndWageArr);
      let totalWages = empDailyHrsAndWageArr
      .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
      .reduce(
        (totalWage, dailyHrsAndWage) => (totalWage += dailyHrsAndWage.dailyWage),
        0
      );
    let totalHours = empDailyHrsAndWageArr
      .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyWage > 0)
      .reduce(
        (totalHours, dailyHrsAndWage) =>
          (totalHours += dailyHrsAndWage.dailyHours),
        0
      );
    console.log("\nUC 11A - Total Hours: " + totalHours + " Total Wages: " + totalWages);
    let fullTimeWorkingDaysStrArr = empDailyHrsAndWageArr
      .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 8)
      .forEach((dailyHrsAndWage) => console.log(dailyHrsAndWage.toString()));
    console.log("\nUC 11B - FullTimeWorkingDayStrings: " + fullTimeWorkingDaysStrArr);
    let partWorkingDaysStrArr = empDailyHrsAndWageArr
      .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 4)
      .map((dailyHrsAndWage) => dailyHrsAndWage.toString());
    console.log("\nUC 11C - PartWorkingDayStrings: " + partWorkingDaysStrArr);
    let nonWorkingDayNums = empDailyHrsAndWageArr
      .filter((dailyHrsAndWage) => dailyHrsAndWage.dailyHours == 0)
      .map((dailyHrsAndWage) => dailyHrsAndWage.dayNum);
    console.log("\nUC 11D - NonWorkingDayNums: " + nonWorkingDayNums);