// Description

// Given a matrix A of size n and m, you have to print the array of size n each element representing the maximum of ith row of the matrix A.


// Input
// Input Format

// First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.

// Following n lines contains m-integers.

// Constraints

// 1 <= n <= 100

// 1 <= m <= 100

// 1 <= arr[i][j] <= 10^4


// Output
// Print the required array.


// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 3 6 9


function runProgram(input){
    input=input.trim().split('\n')
    var [n,m]=input[0].trim().split(" ").map(Number)
    var line=1
    var mat=[]
    for(var i=0; i<n; i++)
    {
        mat.push(input[line].trim().split(" ").map(Number))
        line++
    }
    check(n,m,mat)
}

function check(n,m,mat){

var i=0;
var max=0;
var result=[]
while(i<n){
    for(var j=0; j<mat[i].length; j++)
    {
        if(mat[i][j]>max)
        {
            max=mat[i][j];
        }
    }
    result.push(max);
    max=0;
    i++;
}
console.log(result.join(" "));
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