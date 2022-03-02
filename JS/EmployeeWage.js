//To create Employee pay roll
class EmployeePayRoll
{
  Id;
  Salary;
  Gender;
  StartDate;
constructor(...params)
{
  let regex=RegExp("^[1-9]{1,}$");
  if(regex.test(params[0],params[1]))
  { 
    this.Id=params[0];
    this.Salary=params[1];
  }
  else throw'please Enter Valid Number';
  this.name=params[2];
  this.Gender=params[3];
  this.StartDate=params[4];
}

//getter and setter method
get name(){return this._name;}
set name(name){
  let regex=RegExp("^[A-Z][A-Za-z0-9]{3,}$");
  if(regex.test(name))
    this._name=name;
  else throw'Name is Incorrect';
}
toString()
{
  const options={year:'numeric',month:'long',day:'numeric'};
  const empDate=this.StartDate===undefined ? "undefined":
                this.StartDate.toLocaleDateString("en-US",options);
  return "Id=" + this.Id + ",name=" + this.name + ", salary=" + this.Salary + ", "+ "Gender=" + this.Gender
              + ", startDate=" +empDate;
}
}
let employeePayRoll=new EmployeePayRoll(1,30000,"Raja");
console.log(employeePayRoll.toString());
try{
employeePayRoll.name="Prabha";
console.log(employeePayRoll.toString());
}catch(e){
  console.log(e);
}
let newemployeePayRoll=new EmployeePayRoll(1,35000,"Terrasa","F" , new Date());
console.log(newemployeePayRoll.toString());


