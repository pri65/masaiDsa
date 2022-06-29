// Description

// Given an array,arrwhich hasNintegers.

// You need to print the smallest and largest element present in the array each on new lines.

// Sample Input 1 

// 4
// -2 0 8 4
// Sample Output 1

// -2
// 8

function smallestAndLargestOfAll(n, arr){
    //write code here
    var min = Infinity;
    var max = -Infinity;
    for(var i=0; i<n; i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    console.log(min);
    console.log(max);
}
