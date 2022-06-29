// Description

// Given an integer array. Sort the array in such a way that all the odd number are in the beginning of the array followed by the even numbers.

// The odd number and even number should follow an ascending order.

// Input
// Input Format

// The first line contains the number of integers N

// The second line contains the elements of the array

// Constraints

// 1<=N<=10^4


// Output
// Print the final array.


// Sample Input 1 

// 5
// 2 5 1 4 2 
// Sample Output 1

// 1 5 2 2 4 


function runProgram(input){
    input=input.trim().split('\n')
    var n=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
    check(n,arr)
    
}

function check(n,arr){
    for(var i=0; i<n; i++)
    {
        for(var j=0; j<n-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                swap(arr,j,j+1)
            }
        }
    }
    var odd="";
    var even="";
    for(var i=0; i<n; i++)
    {
        if(arr[i]%2 != 0)
        {
            odd=odd+arr[i]+" ";
        } else {
            even=even+arr[i]+" ";
        }
    }
    var result=odd+even;
    console.log(result);
}

function swap(arr,i,j)
{
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
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