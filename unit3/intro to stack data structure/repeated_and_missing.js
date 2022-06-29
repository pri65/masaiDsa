// Description

// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (2 ≤ n ≤ 100000).

// The second line of the test case contains n integers (1 ≤ Ai ≤ n).


// Output
// For each test case, print the answer.


// Sample Input 1 

// 3
// 5
// 1 2 3 3 4
// 2
// 1 1
// 3
// 1 2 2
// Sample Output 1

// 5 3
// 2 1
// 3 2


function runProgram(input){
    
    input=input.trim().split('\n')
    var tc=+input[0]
    var line=1
    for(var i=0; i<tc; i++)
    {
        var n=+input[line]
        line++
        var A=input[line].trim().split(" ").map(Number)
        line++
        check(A)
    }
}


    function check(A){
     
    let n = A.length
    let Sum1 = Math.floor((n * (n + 1)) / 2)
    let Sum2 = Math.floor((n * (n + 1) * (2 * n + 1))/6)
 
    let missingNumber = 0
    let repeating = 0
 
    for(let i=0;i<A.length;i++){
        Sum1 -= A[i]
        Sum2 -= A[i] * A[i]
    }
     
    missingNumber = Math.floor(Math.floor(Sum1 + Sum2 / Sum1) / 2)
    repeating = missingNumber - Sum1
 
    let ans = []
    
    ans.push(missingNumber)
  ans.push(repeating)
 
console.log(ans.join(" "))
 
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