function fibN(int1, int2, int3, num) {
    if (num == 0) {
      return 0;
    }
  
    let res = [int1, int2, int3];
    for (let i = 0; i < num; i++) {
      if (i > 2) {
        res.push(res[i-1] + res[i-2] + res[i-3])
      }
    }
    return res 
  }

  console.log(fibN(0, 1, 1, 7))