/////////1.Read a single digit number and write the number in word///////
var prompt = require("prompt-sync")();
const num = parseInt(prompt('Enter the number?'));
if(num==1)
{
    console.log("One");
}
else if(num==2)
{
    console.log("Two");
}
else if(num==3)
{
    console.log("Three");
}
else if(num==4)
{
    console.log("Four");
}
else if(num==5)
{
    console.log("Five");
}
else if(num==6)
{
    console.log("Six");
}
else if(num==7)
{
    console.log("Seven");
}
else if(num==8)
{
    console.log("Eight");
}
else if(num==9)
{
    console.log("Nine");
}
else if(num==0)
{
    console.log("Zero");
}
else
{
    console.log("Enter Single digit number");
}
////////2.Read a Number and Display the week day (Sunday, Monday,...)//////
const number1 = parseInt(prompt('Enter the day in number \nEx- 1.Sunday,2.Monday,...?'));
if(number1==1)
{
    console.log("Sunday");
}
else if(number1==2)
{
    console.log("Monday");
}
else if(number1==3)
{
    console.log("Tuesday");
}
else if(number1==4)
{
    console.log("Wednesday");
}
else if(number1==5)
{
    console.log("Thursday");
}
else if(number1==6)
{
    console.log("Friday");
}
else if(number1==7)
{
    console.log("Saturday");
}
else
{
    console.log("Enter the correct number");
}
////3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...//
const number2 = parseInt(prompt('Enter the number?'));
if(number2==1)
    console.log("One");
else if(number2==10)
    console.log("Ten");
else if(number2==100)
    console.log("Hundred");
else if(number2==1000)
    console.log("Thousand");
else if(number2==10000)
    console.log("1 Lakh");
else if(number2==1000000)
    console.log("Ten Lakh");
else if(number2==10000000)
    console.log("Crore");
else
    console.log("Enter correct number");

////Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum//
const a = parseInt(prompt('Enter the number 1 ?'));
const b = parseInt(prompt('Enter the number 2 ?'));
const c = parseInt(prompt('Enter the number 3 ?'));

const num1 = a+(b*c);
const num2 = a%b+c;
const num3 = c + (a/b);
const num4 = (a*b) +c;
console.log(num1+','+ num2+','+num3+','+num4);
let max,min;
if(num1>num2 && num1>num3 && num1>num4)
    max = num1;
else if(num2>num1 && num2>num3 && num2>num4)
    max = num2;
else if(num3>num1 && num3>num2 && num3>num4)
    max=num3;
else    
    max=num4;

if(num1<num2 && num1<num3 && num1<num4)
    min = num1;
else if(num2<num1 && num2<num3 && num2<num4)
    min = num2;
else if(num3<num1 && num3<num2 && num3<num4)
    min=num3;
else    
    min=num4;

console.log('Maximum number is: '+max +'\nMinimum number is: '+min );