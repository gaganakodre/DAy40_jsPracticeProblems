var prompt = require("prompt-sync")();
var thinkNum=parseInt(prompt("think a number 1 to 100:"));
function checkNum(thinkNum)
{
    console.log("welcome to the magicNum predictor");
    sum=thinkNum*2;
    console.log("keep ur friend number same as your enterd number and add");
    MyNum=sum+10;
    console.log("And add mine as 10 and remeber the complete sum..")
    console.log("divide ur total sum by 2 and give back ur friend number");
    Num1=MyNum/2;
    magicNum=Num1-thinkNum;
    console.log("the number keft with u is :"+magicNum);

}
console.log(checkNum(thinkNum));