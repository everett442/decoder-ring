// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("function substitution()", () => {
  it("checks for substitution function()", () => {
    expect(substitution).to.be.a("function");
  });
});
