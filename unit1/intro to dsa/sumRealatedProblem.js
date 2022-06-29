// You are given a numberN, you need to find sum of all the even numbers which are less than or equal to N.


function sumRelatedProblem(N) {
    // Write code here
    var sum=0;
    for(var i=1; i<=N; i++)
    {
        if (i%2==0)
        sum=sum+i;
    }
    console.log(i);
}

sumRelatedProblem(4);