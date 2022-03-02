//To create Employee pay roll
class EmployeePayRoll
{
  Id;
  Salary;
  Gender;
  StartDate;
constructor(...params)
{
  this.Id=params[0];
  this.Salary=params[1];
  this.name=params[2];
  this.Gender=params[3];
  this.StartDate=params[4];
}

//getter and setter method
get name(){return this._name;}
set name(name){this._name=name;}
toString()
{
  const options={year:'numeric',month:'long',day:'numeric'};
  const empDate=this.StartDate===undefined ? "undefined":
                this.StartDate.toLocaleDateString("en-US",options);
  return "Id" + this.Id + ",name=" + this.name + ", salary=" + this.Salary + ", "+ "Gender=" + this.Gender
              + ", startDate=" +empDate;
}
}
let employeePayRoll=new EmployeePayRoll(1,30000,"Raja");
console.log(employeePayRoll.toString());
employeePayRoll.name="Prabha";
console.log(employeePayRoll.toString());
let newemployeePayRoll=new EmployeePayRoll(1,35000,"Terrasa","F" , new Date());
console.log(newemployeePayRoll.toString());


