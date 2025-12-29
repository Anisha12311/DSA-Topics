function LinkedList(val, next) {
  this.val = val;
  this.next = next;
}

function append(head, node) {
  let newNode = new LinkedList(node);
  if (!head) {
    return newNode;
  }
  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = newNode;
  return head;
}

function insertAtBegin(root, val) {
  const newNode = new LinkedList(val);
  if (!root) {
    return newNode;
  }
  newNode.next = root;
  root = newNode;
  return root;
}

function insertAtEnd(root, val) {
  const newNode = new LinkedList(val);
  if (!root) {
    return newNode;
  }
  let curr = root;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = newNode;
  return root;
}

function insertAtPosition(head, val, position) {
  let count = 0;
  let curr = head;
  while (curr) {
    count += 1;
    curr = curr.next;
  }
  if (position > count && position < 1) {
    console.log(false);
    return head;
  }
  if (position === count) return insertAtEnd(head, val);
  if (position === 1) return insertAtBegin(head, val);
  let current = head;
  const newNode = new LinkedList(val);
  for (let i = 1; i < position - 1; i++) {
    current = current.next;
  }

  let temp = current.next;
  current.next = newNode;
  newNode.next = temp;
  return head;
}

function deleteAtFirst(head) {
  if (!head) return null;
  return head.next;
}

function deleteAtEnd(head) {
  if (!head) return null;
  let curr = head;
  if (!curr.next) return null;
  while (curr.next.next) {
    curr = curr.next;
  }
  curr.next = null;
  return head;
}

function deleteAtPosition(head, position) {
  let count = 0;
  let curr = head;
  while (curr) {
    count += 1;
    curr = curr.next;
  }

  if (count === position) return deleteAtEnd(head);
  if (position === 1) return deleteAtFirst(head);
  if (position < 1 || position > count) return head;
  let current = head;

  for (let i = 1; i < position - 2; i++) {
    current = current.next;
  }
  if (!current.next) return head;
  current.next = current.next.next;
  return head;
}


function deleteList(head){
    let curr = head
    while(curr){
        let temp = curr.next
        curr.next = null
        curr = temp
    }
    return null
}

function traverse(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

let root = null;
root = append(root, 20);
root = append(root, 30);
root = append(root, 40);
root = append(root, 50);
// root = insertAtBegin(root, 5);
// root = insertAtEnd(root, 55);
// root = insertAtPosition(root, 45, 3);
// root = deleteAtFirst(root);
// root = deleteAtEnd(root);
root = deleteAtPosition(root, 4);
root = deleteList(root)
traverse(root);
