// Description

// Given a string S, find the number of substrings which contains all the vowels present in "coronavirus".


// Input
// Input Format

// The single line consists of string S

// Constraints

// Length of S <=100


// Output
// Print count of substrings in a single line


// Sample Input 1 

// dangerouscovid
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// Out of all possible substrings following 4 substrings have all vowels [a,i,o,u]

// dangerouscovi

// dangerouscovid

// angerouscovi

// angerouscovid



function runProgram(input){
    var counter=0;
    for(var i=0; i<input.length; i++)
    {
        var bag=""
        for(var j=i; j<input.length; j++)
        {
            bag=bag+input[j]
            if(check(bag))
            {
                counter++;
            }
        }
    }
    console.log(counter)
}

function check(str) {
    if(str.includes("a") && str.includes("i") && str.includes("o") && str.includes("u")) 
    {
        return true;
    } 
    return false;
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