function maskify(cc) {
    if (cc.length > 4) {
        let reversed = reverse(cc);
        let newString = '';
        for (let i = 0; i < reversed.length; i++) {
          if (i < 4) {
            newString += reversed[i];
          } else {
            newString += '#';
          }
        }
        return reverse(newString);
    } else {
        return cc;
    }
  }
   
  function reverse(str) {
    return str.split("").reverse().join("");
  }