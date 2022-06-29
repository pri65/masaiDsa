// Description

// You are given a string stored in a variable with the namestr, containing a mix of upper case and lower case English characters

// The length of the string is stored in a variable with the nameN

// You have to solve the equation17*x, wherexis the number of capital upper case English characters in the string

// For example, consider the value stored inN = 5, andstr = KamaL

// The number of upper case characters in the string is2-K, L

// Therefore, the value of the equation17*x, becomes17*2 = 34, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The second line of the input contains the value stored instr


// Output
// Solve the equation given in the problem statement, as explained


// Sample Input 1 

// 5
// KamaL
// Sample Output 1

// 34
// Hint

// In the sample test case, the value stored inN = 5, andstr = KamaL

// The number of upper case characters in the string is 2 -K, L

// Therefore, the value of the equation17*x, becomes17*2 = 34, which is the required answer


function capitalLettersInStringXVII(N, str) {
	//write you code here
	var sum=0; 
	var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(var i=0; i<str.length; i++)
	{
	    var char=str[i];
	    for(var j=0; j<upper.length; j++)
	    {
	        if(char==upper[j])
	        {
	            sum=sum+1;
	        }
	    }
	}
	console.log(17*sum);
}
