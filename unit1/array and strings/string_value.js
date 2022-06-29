// Description

// Given a stringSof all lowercase letters and each letter has a value of its own.

// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.



// Input
// Input Format

// The first and only line of input contains the StringS.

// Constraints

// 1 <= Length of S <= 1000


// Output
// Print the value of string.


// Sample Input 1 

// aba
// Sample Output 1

// 4



function stringValue(S) {
    //write code here
    var N=S.length;
    var index_string="$abcdefghijklmnopqrstuvwxyz";
    var value_obj={}; //empty object
    for (i=1; i<=26; i++)
       {
       value_obj[index_string[i]] = i;
       }
   var sum=0;
   for(var i=0; i<N; i++)
     {
       sum=sum+value_obj[S[i]];
      }
   console.log(sum);
  }
  
  