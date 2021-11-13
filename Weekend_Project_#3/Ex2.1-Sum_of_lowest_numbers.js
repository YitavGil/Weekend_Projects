const sumLowestNumbers = function(arr){
    let minNum = 0;
     
     while (minNum <= 0 ) {
         minNum = Math.min(...arr)
         const indexMin = arr.indexOf(minNum);
         arr.splice(indexMin, 1);
     }
     const secMin = Math.min(...arr);
 
     return secMin + minNum
 }
 
 const res = sumLowestNumbers([-12 ,11, 1, -2,3,4, 5,6])
 // console.log(res);