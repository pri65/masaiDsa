// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.

// Sample Input 1 

// abcab
// Sample Output 1

// 7

function subStrUnderCond(s){
    //write code here
    //substrings are the part of the main strings
    //a,b,c,a,b are the single letter substring
    //also ab,bc,ca,ab,abc,bca,cab,abca,bcab,abcab
    //only continues letters are substrings
    var n=s.length;
    var ans=0;
    for (var start=0; start<=n-1; start++){
    for (var end=start; end<=n-1; end++){
    if(s[start]==s[end])
    {
        ans++;
    }
    }
    }
    console.log(ans);
    }