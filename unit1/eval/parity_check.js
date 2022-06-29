// Description

// Given an array containing N elements, you have to find the absolute difference between the number of odd and even elements in an array.


// Input
// Input Format

// The first line contains integer numbers N - the size of the array.

// The second-line contains N integer numbers a1, a2, ... aN — elements of the array.

// Constraints

// 1 <= N <= 10^4

// 1 <= a[i] <= 10^4


// Output
// Print the absolute difference between the number of odd and even elements.


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1
// Sample Input 2 

// 4
// 5 7 4 6
// Sample Output 2

// 0
// Hint

// For the first sample,1, 2, 3, 4, 5

// Number of even elements = 2 and 4 = 2

// Number of odd elements = 1, 3, and 5 = 3

// Therefore absolute difference is 1

// For the second sample, 5, 7, 4, 6

// Number of even elements = 4 and 6 = 2

// Number of odd elements = 5 and 7 = 2

// Therefore absolute difference is 0.


function parityCheck(N,arr){
    //write code here
    var evensum=0;
    var oddsum=0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2===0)
        {
            evensum=evensum+1;
        }
        else 
        {
            oddsum=oddsum+1;
        }
    }
    var diff=Math.abs(evensum-oddsum);
    console.log(diff);
}
