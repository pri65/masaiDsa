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
    }
}

var st1=new stack()
st1.push(100)
st1.push(50)