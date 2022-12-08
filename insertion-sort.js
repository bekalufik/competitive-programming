function insertionSort1(n, arr) {
    // Write your code here
    const lastNum = arr[n - 1]
 
 for (let i = n - 2; i >= -1; i--){
       
      if (arr[i] > lastNum) {
            arr.splice(arr.indexOf(arr[i])+1, 1, arr[i])
            console.log(arr.join(' '))
      } 
      else{
            arr.splice(arr.indexOf(arr[i])+1, 1, lastNum)
            console.log(arr.join(' '))
            return;
      }
 }

}
