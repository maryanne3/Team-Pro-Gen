const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, Address) {
    super(name, id, email);
    this.officeNumber = Address;
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
