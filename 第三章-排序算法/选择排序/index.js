function chooseSort (arr){
  let length = arr.length;
  // 定义一个最小值
  let indexMin;
  for (let i = 0; i < length; i++) {
    indexMin = i ;
    for (let j = i; j < length; j++) {
      if(arr[j] < arr[indexMin]){
        indexMin = j
      }
    }
    if(i != indexMin){
      let temp = arr[indexMin];
      arr[indexMin] = arr[i];
      arr[i] = temp;
    } 
  }  
}