function centuryFromYear(num) {
    for (let i = 0; i<= num; i++) {
        return Math.ceil(num/100);
    }
}

// console.log(centuryFromYear(150))