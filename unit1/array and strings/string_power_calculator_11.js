// Description

// You are given a string stored in a variable with the namestr

// The length of the string is stored in a variable with the nameN

// You have to calculate the power of the string

// The power of the string is given by the formula :5*x + 7*y, wherexis the number of vowels in the string, whileyis the number of consonants

// For example, consider the value stored inN = 6, andstr = ankush. Therefore, the number of vowels = 2, and consonants = 4

// Therefore, the value of the equation becomes :5*2 + 7*4 = 38. Therefore, the required output is38


// Input
// The first line of the input contains the value stored inN

// The second line contains the value stored instr


// Output
// Print the power of the string, as explained in the problem statement

// Sample Input 1 

// 6
// ankush
// Sample Output 1


function strPowerCalc(N, str){
	//Write your code here
	var vowel=0;
	var consonant=0;
	
	for (var i=0; i<str.length; i++)
	{
	    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u")
	    {
	        vowel=vowel+1;
	    }
	    else
	    {
	        consonant=consonant+1;
	    }
	}
	var result=5*vowel+7*consonant;
	console.log(result);
}


38
Hint

In the sample test case, the value stored inN = 6, andstr = ankush. Therefore, the number of vowels = 2, and consonants = 4

Therefore, the value of the equation becomes :5*2 + 7*4 = 38. Therefore, the required output is38