const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return engineer github username", () => {
      const testGithub = "ben-pauley";
      const engineer = new Engineer("Ben", 1234, "ben@email.com", testGithub);

      expect(engineer.getGithub()).toBe(testGithub);
    });
  });

  describe("getRole", () => {
    it("should return engineer role", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
