const { ethers } = require("hardhat");

async function main() {
//   const [deployer] = await ethers.getSigners();
    // console.log("Deploying contracts with:", deployer.connect);

  //   const HelloWorld = await ethers.getContractFactory("HelloWorld");
  //   const helloWorld = await HelloWorld.deploy();
  //   await helloWorld.deployed();
  //   console.log("HelloWorld deployed to:", helloWorld.address);

  //   const Counter = await ethers.getContractFactory("Counter");
  //   const counter = await Counter.deploy();
  //   await counter.deployed();
  //   console.log("Counter deployed to:", counter.address);

  //   const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  //   const simpleStorage = await SimpleStorage.deploy();
  //   await simpleStorage.deployed();
  //   console.log("SimpleStorage deployed to:", simpleStorage.address);

  //   const DonationBox = await ethers.getContractFactory("DonationBox");
  //   const donationBox = await DonationBox.deploy();
  //   await donationBox.deployed();
  //   console.log("DonationBox deployed to:", donationBox.address);

  //   const Voting = await ethers.getContractFactory("Voting");
  //   const voting = await Voting.deploy();
  //   await voting.deployed();
  //   console.log("Voting deployed to:", voting.address);

  //   const GMDaily = await ethers.getContractFactory("GMDaily");
  //   const gmDaily = await GMDaily.deploy();
  //   await gmDaily.deployed();
  //   console.log("GMDaily deployed to:", gmDaily.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });