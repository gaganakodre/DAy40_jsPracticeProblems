var head=0,tail=0;
var flipCoin;
while(head<11 && tail<11)
{
    flipCoin = Math.floor(Math.random()*10)%2;
    if(flipCoin==0)
    {
        console.log("Head")
        head++;    
    }
    else
    {
        console.log("Tail")
        tail++;
    }
}
console.log('Headcount:'+head +'\tTailcount:'+tail);
console.log(head==11?'Winner is Head':'Winner is Tail');