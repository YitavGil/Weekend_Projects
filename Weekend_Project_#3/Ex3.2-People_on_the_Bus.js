const busStop = [[2, 0], [4, 3], [10, 4]];

function howManyInBus(arr) {
    let num = 0;
    for (let i = 0; i <= arr.length; i++){
      num = num + arr[i][0] - arr[i][1];
    }
    return num;
}