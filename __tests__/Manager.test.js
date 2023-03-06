const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Adam", "123", "adam@webmail.com", "64 Zoo Lane");
  expect(manager.name).toBe("Adam");
  expect(manager.id).toBe("123");
  expect(manager.email).toBe("adam@webmail.com");
  expect(manager.Address).toBe("64 Zoo Lane");
});

test("gets manager's name", () => {
  const result = new Manager("Adam", "123", "adam@webmail.com", "64 Zoo Lane").getName();
  expect(result).toEqual("Adam");
});

test("gets manager's ID", () => {
  const result = new Manager("Adam", "123", "adam@webmail.com", "64 Zoo Lane").getId();
  expect(result).toEqual("123");
});

test("gets manager's email", () => {
  const result = new Manager("Adam", "123", "adam@webmail.com", "64 Zoo Lane").getEmail();
  expect(result).toEqual("adam@webmail.com");
});

test("gets Manager's role", () => {
  const result = new Manager("Adam", "123", "adam@webmail.com", "64 Zoo Lane").getRole();
  expect(result).toEqual("Manager");
});