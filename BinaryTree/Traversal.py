import math
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
    

    
def Preorder(root):
       stack = [root]
       
       while stack:
           node = stack.pop()
           print(node.val)
           
           if(node.right):
               stack.append(node.right)
            
           if(node.left):
               stack.append(node.left)
               
    
def Inorder(root):
    stack = []
    curr = root
    
    while curr or len(stack) > 0:
        while curr: 
            stack.append(curr)
            curr = curr.left
        
        curr = stack.pop()
        print(curr.val)
        curr = curr.right

def Postorder(root):
    s1 = [root]
    s2 = []
    while s1:
        node = s1.pop()
        s2.append(node.val)
        
        if(node.left):
            s1.append(node.left)
            
        if(node.right):
            s1.append(node.right)
    for i in s2[::-1]:
        print(i) 


def Levelorder(root):
    queue = [root]
    
    while queue:
        node = queue.pop(0)
        print(node.val)
        
        if(node.left):
            queue.append(node.left)
        if(node.right):
            queue.append(node.right)
            
        
def maxHeight(root):
    queue = [(root, 1)]
    height = 0
    while queue:
        node, h = queue.pop(0)
        height = h
        
        if(node.left):
            queue.append((node.left, h+1))
        if(node.right):
            queue.append((node.right, h+1))
    return height

def height(root):
    if root is None:
        return 0
    
    lh = height(root.left)
    rh = height(root.right)
    
    return 1 + max(lh, rh)

def checkBalanced(root):
    if root is None:
        return 0
    
    lh = checkBalanced(root.left)
    rh = checkBalanced(root.right)
    print(lh, rh)
    if(abs(lh- rh) > 1): return False
    
    return 1 + max(lh, rh)
def isBalanced(root):
    checkBalanced(root) > 0

root = Node(1)

root.left = Node(2)
root.right = Node(3)

root.left.left = Node(4)
root.left.right = Node(5)
root.left.right.right = Node(6)
root.left.right.right.left = Node(7)





# Preorder(root)
# Inorder(root)
# Postorder(root)
# Levelorder(root)
# print(maxHeight(root))
print("True" if isBalanced(root) else "False")