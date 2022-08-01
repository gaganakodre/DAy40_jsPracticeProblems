function validatePalin(str) {   
    const len = string.length;  
    for (let i = 0; i < len / 2; i++) {   
        if (string[i] !== string[len - 1 - i]) {  
            console.log( 'It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
}  
const string = prompt('Enter a string or number: ');  
console.log(string);  