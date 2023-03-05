const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Alisa", "123", "alisa@webmail.com");
  expect(employee.name).toBe("Alisa");
  expect(employee.id).toBe("123");
  expect(employee.email).toBe("alisa@webmail.com");
});

test("gets employee's name", () => {
  const result = new Employee("Alisa", "123", "alisa@webmail.com").getName();
  expect(result).toEqual("Alisa");
});

test("gets employee's ID", () => {
  const result = new Employee("Alisa", "123", "alisa@gwebail.com").getId();
  expect(result).toEqual("123");
});

test("gets employee's email", () => {
  const result = new Employee("Alisa", "123", "alisa@webmail.com").getEmail();
  expect(result).toEqual("alisa@webmail.com");
});

test("gets employee's role", () => {
  const result = new Employee("Alisa", "123", "alisa@webmail.com").getRole();
  expect(result).toEqual("Employee");
});