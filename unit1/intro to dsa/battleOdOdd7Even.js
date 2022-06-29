// You are given an arrayarrofNintegers.

// You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// Even


function battleOfOddAndEven(n, arr){
    //write code here
    var sum1=0;
    var sum2=0;
    for (var i=0; i<arr.length; i++)
    {
     if(arr[i]%2==0)
       {
         sum1=sum1+arr[i];
       }
     else if (arr[i]%2!=0)
     {
         sum2=sum2+arr[i];
     }
    }
    if(sum1>=sum2)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }
   
}
