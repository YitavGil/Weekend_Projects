let myArray = [1, 1, 1, 1, 2, 1, 1, 1]

function unique(array) {
    for (let i = 0, single = []; i < array.length; i++) {
      if (array.indexOf(array[i], array.indexOf(array[i]) + 1) == -1)
        single.push(array[i]);
    };
    return single;
  };

// console.log(unique(myArray)