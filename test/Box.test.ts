
import { expect } from "chai";
import { ethers } from "hardhat";

describe('Box', function () {
  before(async function () {
    this.Box = await ethers.getContractFactory("Box");
  })

  beforeEach(async function () {
    this.box = await this.Box.deploy();
    await this.box.waitForDeployment();
  })

  // test cases
  it('retrieve returns value previously stored', async function () {
    // store value
    await this.box.storeValue(32);
    // Note that we need to use strings to compare the 256 bit integers
    const res = (await this.box.retrieveValue()).toString();
    expect(res).to.equal(`${32}`)
  });
})
