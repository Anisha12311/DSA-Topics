class Animal:
    def bark(self):
        print("Dog is barking...")
        
    def run(self):
        print("Animals are running")
        
        
class Dog(Animal):
    def swim(self):
        print("Duck is swimming...")
     
d = Dog()
d.bark()
d.swim()