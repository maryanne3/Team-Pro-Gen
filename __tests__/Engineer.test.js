const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Jack", "123", "jack@gmail.com", "jackhub");
  expect(engineer.name).toBe("Jack");
  expect(engineer.id).toBe("123");
  expect(engineer.email).toBe("jack@gmail.com");
  expect(engineer.github).toBe("jackhub");
});

test("gets engineer's name", () => {
  const result = new Engineer(
    "Jack",
    "123",
    "jack@gmail.com",
    "jackhub"
  ).getName();
  expect(result).toEqual("Jack");
});

test("gets engineer's ID", () => {
  const result = new Engineer(
    "Jack",
    "123",
    "jack@gmail.com",
    "jackhub"
  ).getId();
  expect(result).toEqual("123");
});

test("gets engineer's email", () => {
  const result = new Engineer(
    "Jack",
    "123",
    "jack@gmail.com",
    "jackhub"
  ).getEmail();
  expect(result).toEqual("jack@gmail.com");
});

test("gets engineer's github", () => {
  const result = new Engineer(
    "Jack",
    "123",
    "jack@gmail.com",
    "jackhub"
  ).getGithub();
  expect(result).toEqual("jackhub");
});

test("gets engineer's role", () => {
  const result = new Engineer(
    "Jack",
    "123",
    "jack@gmail.com",
    "jackhub"
  ).getRole();
  expect(result).toEqual("Engineer");
});