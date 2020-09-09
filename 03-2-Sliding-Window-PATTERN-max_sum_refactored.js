//write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

//Time O(N)

// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;

//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   console.log(maxSum)
//   return maxSum;
// }
// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null;

  for(let i = 0; i < num; i++){ 
    maxSum += arr[i]; //1, 2, 3
    console.log("maxSum", maxSum) //6
  }

  tempSum = maxSum; 
  console.log("tempSum", tempSum) //6

  for(let i = num; i < arr.length; i++){ //3...
    tempSum = tempSum - arr[i - num] + arr[i];  
                //sum - previousNum + nextNum
                //6  -  arr[3-3]  +   arr[3]
                //6  -  1         +     4   = 9
                //9  -  arr[4-3]  +   arr[4]
                //9  -  2         +     5   = 12
                //...

    console.log(":::t:", tempSum)
    console.log(":::::::::m:", maxSum)

    maxSum = Math.max(maxSum, tempSum);

  }

  console.log(maxSum)
  
  return maxSum;

}

maxSubarraySum([1,2,3,4,5,6,7,8,9],3)
//maxSubarraySum([2,6,9,2,1,8,5,6,3],3)