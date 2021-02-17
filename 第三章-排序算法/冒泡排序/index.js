// 冒泡排序
function bubbleSort (arr){
  var length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // 如果前面的元素 比后面大  就交换为位置，直到最大的放在数组的最后一位
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

// 冒泡排序优化
function bubbleSort2 (arr){
  var length = arr.length;
  for (let i = 0; i < length; i++) {
    // 比较过的就不需再比较
    for (let j = 0; j < length - i -1; j++) {
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}