let checkPrime = (num) =>
{
    let flag=0;
    if(num==2)
        return true;
    else if (num % 2 == 0)
        return false;
    else
        for(let i=3;i*i<=num;i++)
            if(num%i==0)
            {
                flag=1;
                break;
            }
        if(flag==1)
            return false;
        else
            return true;
        
}
let n = parseInt(prompt('Enter the value of n?'));
let num = n;
for(let i=1;i<=n;i++)
    if(num%i==0)
        console.log(checkPrime(i)?`${i} is Prime factor`:``);