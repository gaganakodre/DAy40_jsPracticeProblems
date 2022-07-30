const StatingNumber = parseInt(prompt('Enter lower number: '));
const EndingNumber = parseInt(prompt('Enter higher number: '));
console.log('The prime numbers between '+StatingNumber+' and '+EndingNumber+' are:');
for (let i = StatingNumber; i <= EndingNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}