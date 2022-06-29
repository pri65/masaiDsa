// Sample Input 1 

// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5
// Sample Output 1

// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8

function goInZigZag(N, M, matrix){
    //write code here
    
    var total = "";
    for(var row=0; row<=N-1; row++){
    if(row%2===0){
        for(var col=M-1; col>=0; col--){
            // console.log(matrix[row][col]);
         total += matrix[row][col] + " ";
            
        }
    }else{
        for(var col=0; col<=M-1; col++){
        //   console.log(matrix[row][col]);
        total += matrix[row][col] + " ";
            
        }
    }

    }
    console.log(total)
 
}
