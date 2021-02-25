const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return intern school", () => {
      const testSchool = "Birmingham";
      const intern = new Intern("Ben", 1234, "ben@email.com", testSchool);

      expect(intern.getSchool()).toBe(testSchool);
    });
  });
  describe("getRole", () => {
    it("should return intern role", () => {
      const intern = new Intern();

      expect(intern.getRole()).toBe("Intern");
    });
  });
});
