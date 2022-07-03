// Description

// Givennnon-negative integers representing the histogram's bar height where the width of each bar is 1, what is the area of the largest rectangle that can be formed using this histogram?


// Input
// Input Description

// First line contains T the number of test cases

// The first line of each test case contains N, the size of the histogram array

// The second line of each test case contains N space separated integers

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10e5

// 0 <= a[i] <= 1000


// Output
// Print a single integer, the maximum area of the rectangle in the histogram


// Sample Input 1 

// 2
// 4
// 2 3 4 5
// 6
// 7 5 4 3 6 8
// Sample Output 1

// 9
// 18



function runProgram(input){
    input=input.trim().split('\n')
    var tc=+input[0]
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var n=+input[line]
        line++
        var arr=input[line].trim().split(" ").map(Number)
        line++
        check(n,arr)
    }
    
}

function check(n,arr) {
    let stack = []
    let max_area = 0
    let index = 0
    while(index < arr.length){
        if(stack.length == 0 || arr[stack[stack.length-1]] <= arr[index]){
            stack.push(index)
            index += 1
        } else {
            let top_of_stack = stack.pop()
             let area = (arr[top_of_stack]*(stack.length > 0 ? (index - stack[stack.length-1] - 1) : index))
            max_area = Math.max(max_area, area)
        }
    }
    while(stack.length > 0){
        let top_of_stack = stack.pop()
        let area = (arr[top_of_stack]*(stack.length > 0 ? (index - stack[stack.length-1] - 1) : index))
        max_area = Math.max(max_area, area)
    }
   console.log(max_area)
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