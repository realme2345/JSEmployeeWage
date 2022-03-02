//To create Employee pay roll
class EmployeePayRoll
{
  Id;
  Salary;
constructor(id,salary,name)
{
  this.Id=id;
  this.Salary=salary;
  this.name=name;
}

//getter and setter method
get name(){return this._name;}
set name(name){this._name=name;}
toString()
{
  return "id =" + this.Id + ", name = " + this.name + ", salary = " + this.Salary;
}
}
let employeePayRoll=new EmployeePayRoll(1,30000,"Raja");
console.log(employeePayRoll.toString());
employeePayRoll.name="Prabha";
console.log(employeePayRoll.toString());

