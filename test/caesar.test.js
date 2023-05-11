// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("checks for caesar() function", () => {
    expect(caesar).to.be.a("function");
  });
  it("returns false if shift is 0 or grater than 25", () => {
    expect(caesar("Hello World", 0)).to.be.false;

    expect(caesar("Hello World", 30)).to.be.false;
  });
  it("encodes a message input", () => {
    const message = "hello world!";
    const shift = 5;
    const expected = "mjqqt btwqi!";
    const actual = caesar(message, shift);
    expect(actual).to.equal(expected);
  });
  it("decodes a message input if false argument is passed", ()=>{
    const message = "mjqqt btwqi!";
    const shift = 5;
    const expected = "hello world!"
    const actual = caesar(message, shift, false);
    expect(actual).to.equal(expected);

  })
});
