let getBirthmonthNumber = () => Math.floor(Math.random()*12)+1;
let getBdayMonth = () =>
{
    //map to store month and individuals having bday on that month
    let bDayMap = new Map();
    for(let i=0;i<50;i++)
    {
        let month = getBirthmonthNumber();
        let personsHavingSameBdayMonth = '';
        //check whether it already has values
        if(bDayMap.has(month))
            personsHavingSameBdayMonth = bDayMap.get(month);
        //appending old value with new one
        personsHavingSameBdayMonth = personsHavingSameBdayMonth + (`${i},`);
        //seeting it to dictionary
        bDayMap.set(month,personsHavingSameBdayMonth);
    }
    console.log(bDayMap);
}
getBdayMonth();