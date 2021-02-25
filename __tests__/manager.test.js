const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("should return manager office number", () => {
      const testOfficeNumber = 99;
      const manager = new Manager(
        "Ben",
        1234,
        "ben@email.com",
        testOfficeNumber
      );

      expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
    });
  });
  describe("getRole", () => {
    it("should return manager role", () => {
      const manager = new Manager();

      expect(manager.getRole()).toBe("Manager");
    });
  });
});
