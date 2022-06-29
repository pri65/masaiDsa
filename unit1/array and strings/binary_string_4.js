// Description

// You are given a string stored in a variable with the namestr, whose length is stored in a variable with the nameN

// The string is binary, which means it contains only 1's and 0's

// You have to find the length of the longest substring which starts at 0 and ends at 0 as well

// For example, consider the value stored inN = 4, andstr = 1001

// All the non empty subarrays of the given string are

// 1
// 10
// 100
// 1001
// 0
// 00
// 001
// 0
// 01
// 1

// The longest substring starting at 0 and end at 0 is00, whose length is 2. Therefore, the required output is2
// Note : If the count of 0's in the given string is less than or equal to 1, 
// then the output should be 0, as there are no substring starting and ending at 0


// Input
// The first line of the input contains the value stored inN

// The second line contains the value stored instr


// Output
// Print one number, denoting the length of the longest substring starting with 0 and end at 0 as well

// Sample Input 1 

// 6
// 110101
// Sample Output 1

// 3
// Sample Input 2 

// 5
// 11011
// Sample Output 2

// 0


function binaryString4(N,str){
    //write code here
    var max_len=0;
    for(var i=0; i<N; i++)
    {
        for(var j=i+1; j<N; j++)
        {
            if(str[i]=='0' && str[j]=='0')
            {
                current_length=j-i+1;
                if(current_length>max_len)
                {
                    max_len=current_length;
                }
            }
        }
        
    }
  console.log(max_len);
}
