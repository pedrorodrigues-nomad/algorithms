class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    const node = new Node(data);
    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      node.next = current;
      previous.next = node;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  removeData(data) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        }
      }
    }
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();
ll.insertAt(60, 2);
ll.printList();
ll.removeFrom(3);
ll.printList();
ll.removeData(20);
ll.printList();
console.log(ll.indexOf(40));
console.log(ll.isEmpty());
console.log(ll.getSize());
