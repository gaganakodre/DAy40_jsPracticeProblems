//1.if and else stmts//
//1.  5 random numbers and finding max and min////

const prompt = require("prompt-sync")();
var arr = [];
while(arr.length < 5)
{
    var num = Math.floor(Math.random() * 1000) + 1;
    if(arr.indexOf(num) === -1) arr.push(num);
    
}
console.log(arr);
result=0;
if(result==0)
{
    console.log("maximun number out of 5:"+Math.max(...arr)+"\tminium number otu of 5:"+(Math.min(...arr)));
}
else
{
    console.log("invalid data");
}
///2.Write a program that takes day and month//
// from the command line and prints true if day of month is between March 20 and June 20, false otherwise.///
function checkMonth()
{
    //get input from console using prompt
    var day = parseInt( prompt("Enter the day?"));
    var month = parseInt(prompt("Enter the month in number?"));
    if(month==3)
    {
        if(day>=20 && day<=31)
        {
            return true;
        }
        else
        {
            return false;

        }
        

    }
    if(month==4)
    {
        if(day>=1 && day<=30)
        {
            return true;
        }
        else
        {
            return false;

        }

    }
    if(month==5)
    {
        if(day>=1 && day<=31)
        {
            return true;
        }
        else
        {
            return false;

        }

    }
    if(month==6)
    {
        if(day>=1 && day<=20)
        {
            return true;
        }
        else
        {
            return false;

        }

    }
}
console.log(checkMonth()?"Valid/true":"Invalid/false");
//Write a program that takes a year as input and outputs the Year is a Leap Year or not
//a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
//divisible by 400.

function checkLeapYear(year) {

    //three conditions to find out the leap year
    Year=0;
    if ((Year == year % 4) && (Year!= year % 100) || (Year == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt("Enter a year:");

checkLeapYear(year);
//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
function getCoinFlip()
{
    return Math.floor((Math.random() * 10))%2;
    //returns either 0 or 1
}
//1 is head , 0 is tail
console.log(getCoinFlip()==1?"Head":"Tail");