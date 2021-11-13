function repeatStr(num, str) {
    let myString = ""
    for (let i = 0; i <= num; i++){
     myString += str
    }
    return myString
}

console.log(repeatStr(7, "boom"))