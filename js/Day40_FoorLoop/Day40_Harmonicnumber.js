let n = parseInt(prompt('Enter the value of n?'));
if(n!=0)
{
        let harmonicNum =1;
        for (let i = 2; i <= n; i++)
        {
            harmonicNum += 1 / i;
        }
        console.log('The nth harmonic value is : '+harmonicNum);
}
else
{
    console.log('The value should not be zero');
}