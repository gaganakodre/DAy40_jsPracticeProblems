//let userAmount=200;
let Amount=100;
let bet=0,win=0;
while(Amount<200 && Amount>0)
{
    let res=Math.floor(Math.random()* 10)%2;//get 0 or 1 ,indicating 1 for win and 0 for loss
    if(res==1)
    {
        Amount++;
        win++;
    }
    else
        Amount--;
    //get number of bets
    bet++;
}
console.log('User amount: '+Amount+ '\nNumber of Wins: '+win+ '\nTotal Bets made: '+bet);