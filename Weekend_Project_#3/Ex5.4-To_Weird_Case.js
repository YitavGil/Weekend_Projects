const to_weird_case = (string) => {
    let  newString = [];
    for( let i in string ) {
        if(i%2 == 0){
            newString.push(string[i].toUpperCase());
        } else {
            newString.push(string[i].toLowerCase());
        }
    }
    return newString.join('');
};

to_weird_case('Weird string case');