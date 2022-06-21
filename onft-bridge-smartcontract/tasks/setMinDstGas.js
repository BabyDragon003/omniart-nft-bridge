require("dotenv").config();
const CHAIN_ID = require("../constants/chainIds.json")

module.exports = async function (taskArgs, hre) {
	const contract = await ethers.getContract(taskArgs.contract)
