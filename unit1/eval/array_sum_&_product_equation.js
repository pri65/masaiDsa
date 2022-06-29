// Description

// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the value of the equation5*x + 3*y,

// where x - sum of all elements in the array
// and y - product of all elements in the array
// For example, consider the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 1 + 2 + 3 + 4 = 10, and the value ofy = 1*2*3*4 = 24

// Therefore, the value of the given equation =5*x + 3*y = 5*10 + 3*24 = 50 + 72 = 122, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The next line contains the elements of the array, which are stored inarr


// Output
// Print the value of the equation, as explained in the problem statement

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 122
// Hint

// In the sample test case, he value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 1 + 2 + 3 + 4 = 10, and the value ofy = 1*2*3*4 = 24

// Therefore, the value of the given equation =5*x + 3*y = 5*10 + 3*24 = 50 + 72 = 122, which is the required answer



function operationOnNumbers(N,arr){
	//write your code here
	var y=1;
	var x=0;
	for(var i=0; i<arr.length; i++)
	{
	    y=y*arr[i];
	    x=x+arr[i];
	}
	
	console.log((5*x)+(3*y));
}
