function getThreeDigitRandomNumber()
{
    //get the 3 digit random numbers
    return Math.floor((Math.random() * 900)+ 100);
}
function SecondMaxAndMinNumber()
{
    let numberArray=new Array();
    let limit  = 10;
    //getting arrray elements
    for(let i=0;i<10;i++)
        numberArray[i] = getThreeDigitRandomNumber();
    console.log(numberArray.toString());
    var firstmax = Math.max.apply(null,numberArray );//here first finding the firstmax number from the array
    //console.log(firstmax);
    var spliceing_FristMaxNum=numberArray.splice(numberArray.indexOf(firstmax), 1);
    //console.log(numberArray.toString())
    var secondMax= Math.max.apply(null, numberArray);
    console.log("second LArgest number in the array is:"+secondMax);
    var firstmin = Math.min.apply(null,numberArray );//here first finding the firstmax number from the array
    //console.log(firstmin);
    var spliceing_FristMinNum=numberArray.splice(numberArray.indexOf(firstmin), 1);
    //console.log(numberArray.toString())
    var secondMin= Math.min.apply(null, numberArray);
    console.log("second minimum number in the array is:"+secondMin);
}
console.log(SecondMaxAndMinNumber());
//2.refactor same code to get max and min number using sorting
function SecondmaxAndMinUsingSort()
{
    let numbersortArray=new Array();
    let limit  = 10;
    //getting arrray elements
    for(let i=0;i<10;i++)
        numbersortArray[i] = getThreeDigitRandomNumber();
    console.log("Array before sorting:"+numbersortArray.toString());
    let NewSortedArray=new  Array()
    NewSortedArray=numbersortArray.sort();
    console.log("Array aftre sorting:"+NewSortedArray);
    console.log("second largest number in the sorted array:"+NewSortedArray.slice(1,2));
    console.log("secong minimun array:"+NewSortedArray.slice(8,9))
    
}
console.log(SecondmaxAndMinUsingSort());
