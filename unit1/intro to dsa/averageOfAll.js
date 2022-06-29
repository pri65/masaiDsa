// Description

// You are given anarrwhich hasNintegers.

// Write a program to print the ceil ofaverage of integerspresent in the array.

// Note:- The ceil value of the given whole numberKis the smallest integer value greater or equal to aK.

// For example:-

// if the value of K = 3.679, the ceil value of K is 4
// if the value of K = 5, the ceil value of K is 5.

// Sample Input 1 

// 4
// 2 5 0 9
// Sample Output 1

// 4

function averageOfAll(n, arr){
    //write code here
    var sum=0;
    var count=0;
    for (var i=0; i<arr.length; i++)
    {
        sum=sum+arr[i];
        count++;
    }
    var average=sum/count;
    var final=Math.ceil(average);
     console.log(final);
}
