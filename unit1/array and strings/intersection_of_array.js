// Description

// You are given 2 arraysarr1andarr2ofNintegers.

// Your task is to write a program that finds the one integer which is common in both arrays (arr1andarr2).

// Note: There is always one integer common in both arrays.

// Sample Input 1 

// 3
// 4 5 7
// 9 2 5
// Sample Output 1

// 5


function intersectionOfArray(N, arr1, arr2){
    //write code here
    for(var i=0; i<arr1.length; i++)
    {
        for(var j=0; j<arr2.length; j++)
        {
            if(arr1[i]==arr2[j])
            {
                console.log(arr1[i]);
            }
        }
    }
}
