class stack {
    constructor() {
        this.arr=[];
        this.size=0;
        this.top=-1;
    }
    push(val) {
        this.top++;
        this.arr[this.top]=val;
        this.size++;
        console.log(this.size,this.arr[this.top]);
    }
    pop() {
        if(this.size==0)
        {
            console.log("Stack is empty");
        } else {
            console.log(this.arr[this.top])
            this.top--;
            this.size--;
        }
        Peek() {
            if(this.size==0)
        {
            console.log("Stack is empty");
        } else {
            console.log(this.arr[this.top])
        }
    }
    isEmpty() 
    {
        if(this.size==0) {
            return true;
        } else {
            return false;
        }
    }
}

var st1=new stack()
st1.pop() //stack is empty
st1.push(100) //1 100
st1.push(50) //2 50
st1.push(20) //3 20