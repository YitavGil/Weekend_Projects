function fibN(num) {
    if (num == 0) {
      return 0;
    }
  
    let res = [];
    for (let i = 0; i < num; i++) {
      if (i == 0) {
        res.push(1);
      }
      else if (i == 1) {
        res.push(1);
      }
      else {
        res.push(res[i-1] + res[i-2])
      }
    }
    return res[num-1]
  }

  console.log(fibN(9))