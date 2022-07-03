// Description

// Given an integer n, find out whether an integer is odd, even, or not skewed.

// An integer is oddly skewed if it has more number of odd divisors than even divisors and vice versa for evenly skewed.

// If the number of odd and even divisors are equal, then it is not skewed.

// Refer to the sample testcase for I/O.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000000) — the number of shops in the neighborhood.


// Output
// For each test case, print the answer: "Odd Skewed" or "Even Skewed" or "Not Skewed".


// Sample Input 1 

// 3
// 4
// 6
// 11
// Sample Output 1

// Even Skewed
// Not Skewed
// Odd Skewed



function runProgram(input){
    input=input.trim().split('\n')
    var tc=+input[0]
    var line=1;
    for(var i=0; i<tc; i++)
    {
        var n=+input[line]
        line++
        check(n)
    }
     
 }
 
 
 function check(n) {
     
     let div=[]
     for(i=1; i<=n; i++)
     {
         if(n%i===0)
         {
             div.push(i);
         }
     }
     var odd=0;
     var even=0;
     for(var j=0; j<div.length; j++)
     {
         if(div[j]%2==0)
         {
             even++;
         } else {
             odd++;
         }
     }
     
     if(odd>even)
     {
       console.log("Odd Skewed")  
     } else if(odd<even)
     {
         console.log("Even Skewed")
     } else if(odd==even)
     {
         console.log("Not Skewed")
     }
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