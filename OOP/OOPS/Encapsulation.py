class Employee:
    def __init__(self, name, roll, branch):
        self.__name = name
        self.__roll = roll
        self.__branch = branch
        
    def deplayDetails(self):
        print("Name =", self.__name)
        print("Roll =", self.__roll)
        print("Branch =", self.__branch)

class Department(Employee):
    def employeeDetails(self):
        print("Employee name", self.__name)
  


employee = Employee('Anisha', 'Engineer', 'IT')

d = Department('Anisha', 'Engineer', 'IT')
d.employeeDetails()


print("EMPLOYEE",employee.__name)

employee.deplayDetails()