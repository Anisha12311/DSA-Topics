from abc import ABC, abstractmethod
class Car:
    @abstractmethod
    def start():
        pass
    
    

class BMW:
    def start(self):
        return f"BMW car is starting now..."


class BMW:
    def start(self):
        return f"BMW car is starting now..."


car = BMW()    
print(car.start())