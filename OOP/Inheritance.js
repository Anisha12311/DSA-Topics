class Manager {
    getRole() {
        return "Employee"
    }
}

class Employee extends Manager {
    getRole() {
        return super.getRole() + "-> Manager"
    }
}

const m = new Employee()
console.log(m.getRole())


