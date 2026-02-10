
from math import pi
from abc import ABC, abstractmethod
class Shape:
    def __init__(self, shape_type, **kwargs):
        self.shape_type = shape_type
        if(self.shape_type == 'rectangle'):
            self.width = kwargs['width']
            self.height = kwargs['height']
            
        elif self.shape_type == 'circle':
            self.radius = kwargs['radius']
        else:
            raise TypeError("Unsupported shape type")
        
    def calculate_ares(self):
        if(self.shape_type == 'rectangle'):
            return self.width * self.height
        
        elif self.shape_type == 'circle':
            return pi * self.radius ** 2
        
        else:
            raise TypeError("Unsurroted shape type")
        
        
shape = Shape('rectangle', width = 10, height = 20)

print(shape.calculate_ares())

class Shape(ABC):
    def __init__(self, shape_type):
        self.shape_type = shape_type

    @abstractmethod
    def calculate_area():
        pass
    
    
class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__('rectangle')
        self.width = width
        self.height = height
        
    def calculate_area(self):
        return self.width * self.height
    
class Circle(Shape):
    def __init__(self, radius):
        super().__init__('circle')
        self.radius = radius
        
    def calculate_area(self):
        return pi * self.radius ** 2
    
        