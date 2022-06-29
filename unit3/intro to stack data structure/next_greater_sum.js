// Description

// Given an array of N integers, Find the next greater element for each element in the array and if the next greater element does not exist take it as -1,
// You need to output the sum of numbers for which the next greater elements exists.

// Note: You need to output the sum of elements for which the next greater element exists, if for any element next greater element does not exist  (i.e. -1)
// then don't add the elements value in final sum.


// Input
// Input Format:

// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

// Constraints:

// 1 <= T <= 10

// 1 <= N <= 10^4

// 0 <= A[i] <= 1005


// Output
// For each test case output the sum as mentioned in the problem in a new line.


// Sample Input 1 

// 1
// 5
// 2 3 5 8 3
// Sample Output 1

// 10
// Sample Input 2 

// 1
// 6
// 6 10 4 8 3 7
// Sample Output 2

// 13
// Hint

// In Sample 1:

// N = 5

// Array : 2 3 5 8 3

// Next Greater Elements for each elements are as:

// 2 -> 3

// 3 -> 5

// 5 -> 8

// 8 -> -1

// 3 -> -1

// Numbers whose next greater elements exists are: 2, 3, 5, so the output will be 2+3+5 = 10

// In Sample 2:

// N = 6




function runProgram(input){
    input=input.trim().split('\n')
    var tc=+input[0]
    var line=1
    for(var i=0; i<tc; i++)
    {
        var n=+input[line]
        line++
        var arr=input[line].trim().split(" ").map(Number)
        line++
        check(n,arr)
    }
    
}

function check(n,arr){
    var stack=[]
    var ans=[]
    var sum=0;
    
    function peek(s){
        return s[s.length-1]
    }
    for(var i=arr.length-1; i>=0; i--)
    {
        while(stack.length!=0 && peek(stack)<=arr[i])
        {
            stack.pop()
        }
        if(stack.length==0)
        {
            ans[i]=-1;
        } else {
            sum+=arr[i]
            ans[i]=peek(stack)
        }
        
        stack.push(arr[i])
    }
    console.log(sum)
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