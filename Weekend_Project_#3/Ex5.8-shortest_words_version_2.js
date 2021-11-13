function findShort(string){
    let arr = string.split(" ").sort((a, b) => b.length - a.length);
    return arr[0]
  }


  console.log(findShort("hello darkness my old friend"))