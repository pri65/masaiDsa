//create stack from scrach
stack=[]
var top=-1;
var maxSize=10;

//push
function push(x){
  if(top==maxSize-1)
  {
    console.log("OVERFLOW")
  } else{
    top++;
    stack[top]=x
  }
}

//pop
function pop(){
  if(isEmpty()==true){
    console.log("UNDERFLOW");
  } else {
    top--;
  }
}
function isEmpty(){
  if(top==-1)
  {
    return true;
  } else {
    return false;
  }
}

//peek
function peek(){
  if(isEmpty()==true){
    console.log("UNDERFLOW");
  } else {
    console.log(stack[top])
  }
}

push(2)
push(4)
push(6)
push(8)
peek()
pop()
pop()
peek()