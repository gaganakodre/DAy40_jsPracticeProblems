var digitArray=[0,-1,-2,3];
function sumArray(array) {
    const ourArray = [0,-1,-2,3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([0,-1,-2,3]));