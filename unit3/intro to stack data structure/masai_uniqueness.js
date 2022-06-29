// Description

// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).

// If it has just unique character, output "Unique"

// Else in all other cases, output "No"


// Input
// Input Format

// First and the only line contains string S

// Constraints

// Length of S < 1000


// Output
// Output one string based on string


// Sample Input 1 

// masai
// Sample Output 1

// No

function runProgram(input){
    check(input)
}

function check(input){
    
    var result = "Unique";
    
    for(var i=0; i<input.length-1; i++){
        for(var j= i+1; j<input.length; j++){
            if(input[i] == input[j]){
                result = "No"
            }
        }
    }
    console.log(result)
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
