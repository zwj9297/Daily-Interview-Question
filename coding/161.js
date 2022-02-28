// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小
function getIndex(arr){
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      index = index < 0 || arr[i] < arr[index] ? i : index
    }
  }
  return index
}