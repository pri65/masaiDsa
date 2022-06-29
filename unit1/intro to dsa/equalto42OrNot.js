// You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.

// Sample Input 1 

// 5
// 3 7 0 9 8
// Sample Output 1

// No

function equalTo42(size,arr) {
    //write code here
    var found="No";
    for (var i=0; i<arr.length; i++)
    {
    if(arr[i]==42)
    {
        found="Yes";
    }
}
console.log(found);
    
    
    
    
    
 
}