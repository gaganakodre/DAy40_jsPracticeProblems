///1.randon fuction to get single digit///
console.log(Math.floor(Math.random()*10));
//2.random function to get the dice values///
DiceValue=Math.floor(Math.random()*10)%7;
console.log("dicevalues:\t" +DiceValue);
//3.add two randomdice number and print result//////
DiceValue1=Math.floor(Math.random()*10)%7;
DiceValue2=Math.floor(Math.random()*10)%7;
console.log("dicevalue2:\t" +DiceValue1+ "\tdiceValue2:\t"+DiceValue2);
///4.reads 5 random number find sum and number///
let sum=0;
result=5;
while(result<=5 && result!=0)
{
    result--;
    num=Math.floor(Math.random()*100);
    sum+=num;
    
}
avg=sum/5;
console.log("sum of the numbers:\t"+sum+"\tavg:\t"+avg)
//5.unit conversion////////
//5.a////
let feet=12
console.log("if 1ft is 12 then 42 in ft="+(42/12));
//////5.b rectangle plot of 60*40 feet in meters//////
meters=5.57 * 3.72;
console.log("60*40 feet equal to 5.57*3.72meter\t"+meters);
totalplots=meters*25;
console.log("if we have same 60*40 size of 25 plots in meters\t"+totalplots);
acres=totalplots/(4047)//convert meters to acres
console.log("25 plotes measurment in acres\t"+acres);



