// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// Sample Output 1

// 9 10 11 12 8 7 6 5 1 2 3 4

function traverse2dArray(N, M, matrix){
    //write code here
    
    var bag="";
for(var col=M-1; col>=0; col--)
{
    for(var row=0; row<=N-1; row++)
    {
        bag=bag+matrix[row][col]+" ";
    }
}
console.log(bag);
  
}
