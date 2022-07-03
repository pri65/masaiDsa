class Node {
    constructor(x) {
      this.data=x;
      this.next=null;
    }
  }
  class linkedlist{
    constructor() {
      this.head=null;
    }
    insertAtBegin(data) {
      var newNode=new Node(data)
      if(this.head==null) {
        this.head=newNode;
      } else {
        newNode.next=this.head
        this.head=newNode
      }
    }
    printLL(){
      var cur=this.head;
      while(cur!=null) {
        console.log(cur.data)
        cur=cur.next
      }
    }
    insertAtEnd(data) {
      var newNode=new Node(data)
      var cur=this.headwhile(cur.next!=null) {
        cur=cur.next
      }
      cur.next=newNode
    }
  }
  
  var ll1=new linkedlist()
  ll1.insertAtBegin(5)
  ll1.insertAtBegin(10)
  ll1.printLL()