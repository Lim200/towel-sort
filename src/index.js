
// You should implement your task here.

module.exports = function towelSort (array) {
    if (!array) {
        return [];
      } else {
    
      const result = [];
    
      for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
            if (i % 2 === 0) {
              // console.log(i)
              let indexJ = j;
              result.push(array[i][indexJ]) 
            } else {
              let indexJ = array[i].length - 1 - j;
              result.push(array[i][indexJ]) 
            }
          }
      } 
       
      return result; 
      }   
}
