//Ex1.1 - Yes or No

const isTrue = function (value) {
    if (value == true) {
        return "yes";
        
    }
    else return "no"

}

const VALUE = 10;

// console.log(isTrue(1 < VALUE));
// console.log(isTrue(12 < VALUE));
// console.log(isTrue(9 > VALUE));
// console.log(isTrue(0 == VALUE));

//! Ex2.1 - Sum of lowest numbers


const sumLowestNumbers = function(arr){
   let minNum = 0;
    
    while (minNum <= 0 ) {
        minNum = Math.min(...arr)
        const indexMin = arr.indexOf(minNum);
        arr.splice(indexMin, 1);
    }
    const secMin = Math.min(...arr);

    return secMin + minNum
}

const res = sumLowestNumbers([-12 ,11, 1, -2,3,4, 5,6])
// console.log(res);

//! Ex2.2 - One and Zero - Binary

const convertToDecimal = function(arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++) {
        sum += Math.pow(2, i) * arr[i];
       
    }

    return sum
}

// console.log(convertToDecimal([0, 1, 0, 1, 1]))

//! Ex2.3 - Find the Next Perfect Square

const perfectNextSqr = function (num) {
    let nextNum = (Math.pow(num, 0.5) + 1);
    if (nextNum % 1 !== 0) {
        return -1
    }
    return Math.pow(nextNum, 2);

}

// console.log(perfectNextSqr(114));

//! Ex2.4 - Unique *************************

let myArray = [1, 1, 1, 1, 2, 1, 1, 1]

function unique(array) {
    for (let i = 0, single = []; i < array.length; i++) {
      if (array.indexOf(array[i], array.indexOf(array[i]) + 1) == -1)
        single.push(array[i]);
    };
    return single;
  };

// console.log(unique(myArray))

//! Ex2.5 - Summation

const summation = function(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}
// console.log(summation(8))

//! Ex2.6 - Years and Centuries

function centuryFromYear(num) {
    for (let i = 0; i<= num; i++) {
        return Math.ceil(num/100);
    }
}

// console.log(centuryFromYear(150))

//! Ex2.7 - Basic Math

function basicOp (operatior, value1, value2) {
    if (operatior == '+') {
        return value1 + value2 ;
    }
    else if (operatior == '-') {
        return value1 - value2 ;
    }
    else if (operatior == '*') {
        return value1 * value2 ;
    }
    else if (operatior == '/') {
        return value1 / value2 ;
    }
    else "Invalid operatior";
}

// console.log(basicOp('*', 7, 8))

//! Ex3.1 - Growth Of population 
function nbYear(p0, percent, aug, p) {
    let i = 0;
    percent = percent / 100;
   while ( p0 < p) {
       p0 += p0 * percent + aug;
       i++;
   }
   return i;
}

// console.log(nbYear(1000, 2, 50, 1200))

//! Ex3.2 - People on the Bus *********************

const busStop = [[2, 0], [4, 3], [10, 4]];

function howManyInBus(arr) {
    let num = 0;
    for (let i = 0; i <= arr.length; i++){
      num = num + arr[i][0] - arr[i][1];
    }
    return num;
}

// console.log(howManyInBus(busStop))

//! Ex 4.1 - Fibonacci *****************************

function fibN(num) {
    let num = 0;
    if (num == 1) {
        return 0
    }

    else if (num == 2) {
        return 1
    }
    
    else return (num - 1) + (num - 2)

}

//! Ex4.2 - Tribonacci ***********************

//! Ex5.1 - trimming string

function stringTrim(string) {
    return string.slice(1, string.length - 1);
}

console.log(stringTrim("hello"))