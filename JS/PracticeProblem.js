//Sequence PracticeProblem
//Using the Random function to get a single Digit
let random=Math.floor(Math.random()*10);
console.log(random);
//Using the Random function to get the Dice Number
let dice=Math.floor(Math.random()*6)+1;
console.log(dice);
//Add two Random Dice Numbers
let result=0;
for(let i=0;i<2;i++)
{
    dice=Math.floor(Math.random()*6)+1;
    result+=dice;
}
console.log("Sum of two Dice Numbers :" + result);
//to find the two random digit numbers and find their sum
for(let i=0;i<5;i++)
{
    let Sum=Math.floor(Math.random()*100);
    console.log(Sum);
    result+=Sum;
}
console.log("Sum of Two digit Numbers :" + result);
//Use Script & Debug – Unit Conversion
//a. 1ft = 12 in then 42 in = ? ft
let inch=42;
let ft=inch/12
console.log("Feets :" + ft);
//Rectangular Plot of 60 feet x 40 feet in meters
let f1=60,f2=40;
let RectMeter=(f1/3.28)*(f2/3.28);
console.log("Rectangle in Meter :" + RectMeter);
// Calculate area of 25 such plots in acres
let ares=25;
let acres=ares*0.0247;
console.log("Acres :" + acres);

