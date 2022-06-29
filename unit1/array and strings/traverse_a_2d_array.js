// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// Sample Output 1

// 4 3 2 1 5 6 7 8 12 11 10 9

function traverse2dArray(N, M, matrix){
    //write code here
//i,j
//3,0
//2,0
//1,0
//0,0
//coulumn is constant
var bag="";
for(var col=0; col<M; col++)
{
    for(var row=N-1; row>=0; row--)
    {
        bag=bag+matrix[row][col]+" ";
    }
}
console.log(bag);
}
