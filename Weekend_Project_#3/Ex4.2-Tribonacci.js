/**
 * 
 * @param {array} res 
 * @param {number} num 
 * @returns {array}
 */
function fibN(res, num) {
    if (num < 4) {
      return res.slice(0, num);
    }
  
    for (let i = 0; i < num; i++) {
      if (i > 2) {
        res.push(res[i-1] + res[i-2] + res[i-3])
      }
    }
    return res 
  }

  console.log(fibN([0, 1, 1], 7))