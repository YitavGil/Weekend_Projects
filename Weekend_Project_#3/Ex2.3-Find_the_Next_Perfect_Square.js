const perfectNextSqr = function (num) {
    let nextNum = (Math.pow(num, 0.5) + 1);
    if (nextNum % 1 !== 0) {
        return -1
    }
    return Math.pow(nextNum, 2);

}

// console.log(perfectNextSqr(114));