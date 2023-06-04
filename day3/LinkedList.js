// Data Structures

/*
    Arrays, Strings => Built-In DataStructures
        - arrays & strings are literaly equal with a minor difference Strings are immutable whereas arrays are mutable

    Arrays
        - Data Structure (Built-In)
        - Indexing: first element stored at the index 0
        - all the other elements are stored in the consecutive memory locations
        - Accessing: numbers[index] -> element (Random Access) O(1)
        - Insertion: last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods:
            * push - pushes the element to the end of the array
            * pop - removes the element from the end of the array
            * unshift - inserts the element to the beginning of the array
            * shift - removes the element from the beginning of the array
            * splice - inserts/removes the element at a specified index
            * forEach
            * map
            * sort
            * reduce
            * filter
            * includes
            * join
            * length

*/

// let numbers = [1, 2, 3, 4, 5];

// numbers.push(7);
// numbers.pop();
// numbers.pop();
// numbers.unshift(10);
// numbers.unshift(12);
// numbers.shift();
// numbers.shift();

// // between 1 and 2 insert 11
// numbers.splice(1, 0, 11);

// // delete 11 from index 1
// numbers.splice(1, 1);

// console.log(numbers);

/*
    Linked List

    * Data Structure
    * Types
        1. Singly Linked List
        2. Doubly Linked List
        3. Circularly Linked List
    * Singly Linked List -> Explanation
    * Abstract Data Type: User defined data type - user defines its behaviour, data, operations
    * Non-Consecutive Memory
    * Singly Linked List: Chain of nodes/objects from different memory locations linked.
    * Every node has a structure with two fields:
        1. data: actual data we want to store inside the memory
        2. address: address of the next node in the memory
    * head pointer: points to the first/start node of the linked list
    * head: null - signifies that the linked list is empty
    * tail node: is the node whose next/address field points to the value null
    * Accessing: Linear Access
    * Insertion: O(1) - insert at the head, O(n)/O(1) - insert at the tail
    * Deletion: O(1), O(n)
*/

// Implementation

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// // create a new node / object
// let newNode = new Node(10);

// let newNode1 = new Node(2);

// newNode.next = newNode1;

// console.log(newNode.next.next);

/*
    newNode = Node {
        data: 10,
        next: Node {
            data: 2,
            next: null
        }
    }

    newNode1 = 
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printList() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }

    insertTail(data) {
        // create a new node
        let newNode = new Node(data);

        // if the list is empty
        if (this.head == null) {
            // store the newNode in the head
            this.head = newNode;
        } else {
            // if the list is not empty
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // store the newNode as the next of tail node
            tail.next = newNode;
        }
    }

    // homework
    // inserts the node to the start/head of the list
    insertHead(data) {
        // create a new node
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    // returns the number of nodes in the list
    length() {
        // let nodes = [];
        // let thead = this.head;
        // while (thead != null) {
        //     nodes.push(thead.data);
        //     thead = thead.next;
        // }
        // console.log(nodes.length);

        let nodes = 0;
        let thead = this.head;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        console.log(nodes);
    }

    deleteTail() {
        if (this.head == null) {
            // should not allow the deletion
            return;
        } else if (this.head.next == null) {
            // only one node in the list
            this.head = null;
        } else {
            // more than one node
            let tail = this.head;

            while (tail.next.next != null) {
                tail = tail.next;
            }

            // tail.next.next == null
            tail.next = null;
        }
    }

    deleteHead() {
        if (this.head == null) {
            // empty list
            return;
        } else {
            // one or more than one node
            this.head = this.head.next;
        }
    }

    middleNode() {
        
    }
}

let list = new LinkedList();

// list.head = new Node(10);
// list.head.next = new Node(2);
// list.head.next.next = new Node(3);
// list.head.next.next.next = new Node(4);
// list.head.next.next.next.next = new Node(6);

list.insertTail(10);
list.insertTail(2);
list.insertTail(3);
list.insertTail(4);
list.insertHead(6);
list.deleteTail();
list.deleteTail();
list.deleteHead();

list.printList();
list.length();

/*
    list = LinkedList {
        head: Node {
            data: 6,
            next: Node {
                data: 10,
                next: Node {
                    data: 2,
                    next: Node {
                        data: 3,
                        next: Node {
                            data: 4,
                            next: null
                        }
                    }
                }
            }
        }
    }

    newNode = Node {
        data: 6,
        next: Node {
            data: 10,
            next: Node {
                data: 2,
                next: Node {
                    data: 3,
                    next: Node {
                        data: 4,
                        next: null
                    }
                }
            }
        }
    }

    list = LinkedList {
        head: Node {
            data: 10,
            next: Node {
                data: 2,
                next: Node {
                    data: 3,
                    next: null
                }
            }
        }
    }

    
*/

/*
    Linked List over Arrays

    1. Faster Insertions/Deletions
    2. Memory utilization

    
*/