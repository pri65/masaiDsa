// You are given an integernum.

// You need to printYesif that integer is a palindrome or else printNo.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such asmadamorracecar.

// Sample Input 1 

// 1221
// Sample Output 1

// Yes

function detectPalindrome(num){
    
    var final="Yes";
    for (var i=0; i<num.length/2; i++)
    {
        if(num[i] != num[num.length-1-i]){
            final = "No"
        }
    }
    console.log(final);
    }
    