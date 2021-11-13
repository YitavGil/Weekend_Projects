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