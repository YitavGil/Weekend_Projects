const convertToDecimal = function(arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++) {
        sum += Math.pow(2, i) * arr[i];
       
    }

    return sum
}

// console.log(convertToDecimal([0, 1, 0, 1, 1]))