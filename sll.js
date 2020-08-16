class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    newNode(value){
        var addNode = new Node(value);
        if (this.head){
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = addNode;
        }
        else{
            this.head = addNode;
        }
        return this
    }

    addFront(value){
        if (this.head == null){
            this.head  = new Node(value);
        }
        else{
            var runner = this.head;
            this.head = new Node(value);
            this.head.next = runner;
        }
        return this
    }

    print(){
        if(this.head){
            var runner = this.head;
            while (runner != null){
                console.log(runner.value);
                runner = runner.next;
            }
        }
        return this
    }
}

var sll = new SLL();
sll.newNode(6).newNode(7).newNode(8).newNode(9).addFront(12).print();
