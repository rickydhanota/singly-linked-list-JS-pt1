class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(value){
        this.head = null;
    }

    addFront(value){
        if (this.head == null){
            this.head  = new Node(value);
            return this;
        }
        else{
            var runner = this.head;
            this.head == new Node(value);
            this.head.next = runner;
            return this;
        }
    }

    print(){
        var runner  = this.head;
        while (runner != null){
            console.log(runner.value);
            runner = runner.next;
        }
        return this;
    }
}

var sll = new SLL();
sll.addFront(12).print();