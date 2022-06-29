// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7


//first generate all substrings
//IInd check if substring is pallindrome
//IIIrd to get max length
function checkPal(str)
{
    var rev_str="";
    for (var i=str.length-1; i>=0; i--)
    {
        rev_str=rev_str+str[i];
    }
    if(str==rev_str)
    {
        return true;
    } else
    {
        return false;
    }
}




function masaiPalSubString(S){
var N=S.length;
var max_len_palindrome=0;

 for (var start=0; start<N; start++)
 {
   for (var end=start; end<N; end++)
   {
     sub_str="";
     for (var i=start; i<=end; i++)
     {
       sub_str=sub_str+S[i];
      }
      if(checkPal(sub_str))
      {
      if(sub_str.length>max_len_palindrome)
       {
          max_len_palindrome=sub_str.length
       }
      }
     }
  }
  console.log(max_len_palindrome);
}


