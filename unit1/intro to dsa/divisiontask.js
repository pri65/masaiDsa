// You are given a number N.

// Let’s say you derive a variablexwhich is equal to the floor of a number you get when32is divided byN.

// In casexis 0, printToo Low
// In case it is not possible to generate a valid number, print-1
// In all other cases, print x.

function divisionTask(N) {
    // Write code here
     var x=Math.floor(32/N);
     if (N==0)
     {
     console.log(-1);
     } else if (x==0)
     {
         console.log("Too Low");
     } else
     {
         console.log(x);
     }
}
