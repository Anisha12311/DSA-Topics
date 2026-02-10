from abc import ABC, abstractmethod
class Printer:
    
    @abstractmethod
    def print(self):
        pass
    
class Fax:
    @abstractmethod
    def fax(self):
        pass
    
class Scan:
    @abstractmethod
    def scan(self):
        pass
    
    
class OldPrinter(Printer):
    def print(self):
        print("Implementation of the print")

class NewPrinter(Printer, Fax, Scan):
    def print(self):
        print("Implementation of the print")
    
    def fax(self):
        print("Implementation of the fax")
    
    def scan(self):
        print("Implementation of the scan")
    
new = NewPrinter()
new.print()