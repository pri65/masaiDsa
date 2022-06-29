// Description

// You are given an even sized array stored in a variable with the namearr

// The size of the array is stored in a variable with the valueN

// You have to solve the following equation7*c1 + 2*c2, such that

// c1 -> The sum of the values of the first half of the array

// c2 -> The sum of the values of the second half of the array

// Consider the value stored inN = 6, andarr = [1 2 3 4 5 6]

// Therefore, the first half of the array is[1 2 3], whose sum is1 + 2 + 3 = 6

// Similarly, the second half of the array is[4 5 6], whose sum is4 + 5 + 6 = 15

// Therefore, the value of the equation-7*(6) + 2*(15) = 42 + 30 = 72, which is the required output


// Sample Input 1 

// 6
// 1 2 3 4 5 6
// Sample Output 1

// 72


function arrayHalfTraversal(N, arr){
	//Write your code here
    var sum1=0;
    var sum2=0;
for (var i=0; i<arr.length/2; i++)
    {
    sum1=sum1+arr[i];
} 
for (var j=N/2; j<N; j++)
{
    sum2=sum2+arr[j];
}
var total=7*sum1+2*sum2;
console.log(total);
}