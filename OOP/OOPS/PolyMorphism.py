class Animal:
    def sound(self):
        print("Animal makes a sound")
        
        
class Dog(Animal):
    def sound(self):
        print("Dog barks...")
        
        
class Cat(Animal):
    def sound(self):
        print("Car meows...")
        
        
animals = [Dog(), Cat(), Animal()]

for c in animals:
    c.sound()
    