function findShort(string){
    let arr = string.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }


  console.log(findShort("hello darkness my old friend"))