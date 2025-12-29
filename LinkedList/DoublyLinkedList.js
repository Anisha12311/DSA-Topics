function ListNode(val, next = null, prev = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

function lengthNode(root) {
  let count = 0;
  let curr = root;
  while (curr != null) {
    count++;
    curr = curr.next;
  }
  return count;
}

function insertNode(root, val) {
  let newNode = new ListNode(val);
  let curr = root;
  if (!root) {
    return newNode;
  }
  while (curr.next != null) {
    curr = curr.next;
  }
  newNode.prev = curr;
  curr.next = newNode;
  return root;
}

function insertAtBegin(root, val) {
  let newNode = new ListNode(val);

  if (!root) {
    return newNode;
  }
  root.prev = newNode;
  newNode.next = root;
  root = newNode;
  return root;
}

function insertAtPosition(root, val, position) {
  let count = lengthNode(root);
  console.log(count);
  if (position < 1 || position > count + 1) {
    return "position not valid";
  }
  console.log(count, position);
  if (count + 1 === position) {
    return insertNode(root, val);
  }
  if (position === 1) {
    return insertAtBegin(root, val);
  }
  let curr = root;
  let newNode = new ListNode(val);
  for (let i = 1; i < position; i++) {
    curr = curr.next;
  }
  let temp = curr.prev;
  temp.next = newNode;
  newNode.prev = temp;
  newNode.next = curr;
  curr.prev = newNode;
  return root;
}

function deleteAtFirst(root) {
  if (!root) return null;

  root = root.next;
  root.prev = null;

  return root;
}

function deleteAtEnd(root) {
  let curr = root;
  while (curr.next != null) {
    curr = curr.next;
  }
  let temp = curr.prev;
  temp.next = curr.next;
  return root;
}

function deleteAtPosition(root, position) {
  let curr = root;
  for (let i = 1; i < position; i++) {
    curr = curr.next;
  }

  let temp = curr.prev;
  temp.next = curr.next;
  curr.next.prev = temp;
  return root;
}

function reverse(root) {
  let curr = root;
   let  temp = null
  while (curr != null) {
     temp = curr.prev;
    curr.prev = curr.next;
    curr.next = temp;
    curr = curr.prev;
  }
  root  = temp.prev
  return root;
}

function traverse(root) {
  if (!root) return null;

  let curr = root;
  while (curr != null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

let root = null;

root = insertNode(root, 10);
root = insertNode(root, 20);
root = insertNode(root, 30);
root = insertNode(root, 40);
root = insertNode(root, 50);

// root = insertAtBegin(root, 5)
// root = insertAtPosition(root, 25,5)
// root = deleteAtFirst(root)
// root = deleteAtEnd(root)
// root = deleteAtPosition(root, 3)
root = reverse(root);
traverse(root);
