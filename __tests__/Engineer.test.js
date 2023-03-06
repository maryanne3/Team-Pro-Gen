const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Sand", "123", "sand@webmail.com", "sandhub");
  expect(engineer.name).toBe("Sand");
  expect(engineer.id).toBe("123");
  expect(engineer.email).toBe("sandk@webmail.com");
  expect(engineer.github).toBe("sandhub");
});

test("gets engineer's name", () => {
  const result = new Engineer(
    "Sand",
    "123",
    "sand@webmail.com",
    "sandhub"
  ).getName();
  expect(result).toEqual("sand");
});

test("gets engineer's ID", () => {
  const result = new Engineer(
    "Sand",
    "123",
    "sand@webmail.com",
    "sandhub"
  ).getId();
  expect(result).toEqual("123");
});

test("gets engineer's email", () => {
  const result = new Engineer(
    "Sand",
    "123",
    "sand@webmail.com",
    "sandhub"
  ).getEmail();
  expect(result).toEqual("sand@webmail.com");
});

test("gets engineer's github", () => {
  const result = new Engineer(
    "Sand",
    "123",
    "sand@webmail.com",
    "sandhub"
  ).getGithub();
  expect(result).toEqual("sandhub");
});

test("gets engineer's role", () => {
  const result = new Engineer(
    "Sand",
    "123",
    "sand@webmail.com",
    "sandhub"
  ).getRole();
  expect(result).toEqual("Engineer");
});