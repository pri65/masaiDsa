// Description

// Given an array of N integers, you have to find the number of pairs of continuous elements whose sum is divisible by 2.

// Example - 1, 2, 4, 4, 5

// Sum of pairs of continuous elements are

// 1+2 = 3
// 2+4 = 6
// 4+4 = 8
// 4+5 = 9

// See only two pairs are there with sum divisible by 2.


// Input
// Input Format

// The first line contains integer numbers N - the size of the array.

// The second-line contains N integer numbers a1, a2, ... aN — elements of the array.

// Constraints

// 1 <= N <= 10^4

// 1 <= a[i] <= 10^4


// Output
// Print the number of such pairs.


// Sample Input 1 

// 5
// 1 2 4 4 5
// Sample Output 1

// 2
// Sample Input 2 

// 5
// 1 2 3 4 5
// Sample Output 2

// 0
// Hint

// For the first sample see the example explained in the question above.

// For the second sample,

// 1, 2, 3, 4, 5

// Sum of pairs of continuous elements are

// 1+2 = 3

// 2+3 = 5

// 3+4 = 7

// 4+5 = 9

// See no pairs are there with sum divisible by 2, therefore the answer is 0.





function runProgram(input){
    input=input.trim().split('\n')
    var n=+input[0]
   var arr=input[1].trim().split(" ").map(Number)
   check(n,arr)
    
}

function check(n,arr) {
    var count=0;
    for(var i=0; i<n; i++)
    {
        if((arr[i]+arr[i+1])%2==0) {
            count++;
        }
    }
    console.log(count)
}

 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
