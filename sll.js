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
            this.head = new Node(value);
        }
        else{
            var runner = this.head;
            this.head = new Node(value);
            this.head.next = runner;
        }
        return this
    }

    removeFront(){
        if (this.head == null){
            return console.log("null")
        }
        else{
            var runner = this.head;
            this.head = runner.next;
        }
        return this
    }

    listNode(value){
        var count = 1;
        if(this.head == null){
            console.log("List is empty");
            return this
        }
        else{
            var runner = this.head;
            while(runner != null){
                if(runner.value == value){
                    console.log(`Value is found in node ${count}`);
                    return this
                }
                runner = runner.next;
                count++;
            }
        }
        return this
    }

    maxNode(){
        var max = 0;
        var runner = this.head;
        while(runner != null){
            if(runner.value>max){
                max = runner.value;
            }
            runner = runner.next;
        }
        console.log(`The MAX value node is ${max}`);
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
sll.newNode(1).newNode(2).newNode(3).newNode(4).newNode(5).addFront(6).addFront(7).addFront(8).removeFront().listNode(3).maxNode().print();
