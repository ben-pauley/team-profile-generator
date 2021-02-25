const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return employee name", () => {
      const testName = "Ben";
      const employee = new Employee(testName);

      expect(employee.getName()).toBe(testName);
    });
  });

  describe("getId", () => {
    it("should return employee ID", () => {
      const testId = 1234;
      const employee = new Employee("Ben", testId);

      expect(employee.getId()).toBe(testId);
    });
  });

  describe("getEmail", () => {
    it("should return employee email", () => {
      const testEmail = "ben@email.com";
      const employee = new Employee("Ben", 1234, testEmail);

      expect(employee.getEmail()).toBe(testEmail);
    });
  });

  describe("getRole", () => {
    it("should return employee role", () => {
      const employee = new Employee("Ben", 123, "ben@email.com");

      expect(employee.getRole()).toBe("Employee");
    });
  });
});
