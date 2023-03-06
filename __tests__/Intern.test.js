const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Nina", "123", "nina@webmail.com", "Flower University");
  expect(intern.name).toBe("Nina");
  expect(intern.id).toBe("123");
  expect(intern.email).toBe("nina@webmail.com");
  expect(intern.school).toBe("Flower University");
});

test("gets intern's name", () => {
  const result = new Intern(
    "Nina",
    "123",
    "nina@webmail.com",
    "Flower University"
  ).getName();
  expect(result).toEqual("Nina");
});

test("gets intern's ID", () => {
  const result = new Intern(
    "Nina",
    "123",
    "nina@webmail.com",
    "Flower University"
  ).getId();
  expect(result).toEqual("123");
});

test("gets intern's email", () => {
  const result = new Intern(
    "Nina",
    "123",
    "nina@webmail.com",
    "Flower University"
  ).getEmail();
  expect(result).toEqual("nina@webmail.com");
});

test("gets intern's school", () => {
  const result = new Intern(
    "Nina",
    "123",
    "nina@webmail.com",
    "Flower University"
  ).getSchool();
  expect(result).toEqual("Flower University");
});

test("gets intern's role", () => {
  const result = new Intern(
    "Nina",
    "123",
    "nina@webmail.com",
    "Flower University"
  ).getRole();
  expect(result).toEqual("Intern");
});