// Description

// Masai is organizing a sports fest that is going to run for N days, and everyday M people are going to participate in it. Each player is having some power rating P. The person with higher value of P, wins everyday. You are given the powers of all the people participating everyday. You have to find the winner for everyday, and print their power in the form of a list. Refer the sample I/O for better understanding.

// Note: Two people may have the same power.


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains the values of N and M.

// The next lines contain M integers, denoting the powers of all the players participating on a given day.

// 1 <= T <= 10

// 1 <= N, M <= 100

// 1 <= A[i][j] <= 100


// Output
// Print the power rating P, of all the winners for everyday, on a single line, for each test case.


// Sample Input 1 

// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 3 3
// 7 7 1
// 4 3 10
// 1 2 3
// Sample Output 1

// 4 8 12 
// 7 10 3 
// Hint

// In the first sample test case, the winner of day 1, is with person with power 4, while the winner on second day is person with power 8, while the winner on day 3 is person with power 12.

// In the second sample test case, on day 1 two people have power 7, so any of them can be the winner. Therefore, the output will be 7 for day 1, for day 2 it will be 10, and for day 3 it will be 3.



function runProgram(input){
    input=input.trim().split('\n')
    var tc=+input[0]
    var line=1
    for(var i=0; i<tc; i++)
    {
        var mat=[]
        var [n,m]=input[line].trim().split(" ").map(Number)
        line++
        for(var j=0; j<n; j++)
        {
            mat.push(input[line].trim().split(" ").map(Number))
            line++
        }
        check(n,m,mat)
    }
}

function check(n,m,mat) {
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