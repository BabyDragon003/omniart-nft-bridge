const CHAIN_IDS = require("../constants/chainIds.json")
const ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    const onft1155 = await ethers.getContract("ONFT1155")
    const dstChainId = CHAIN_IDS[taskArgs.targetNetwork]

    const tokenIds = taskArgs.tokenIds.split(",")
    const quantities = taskArgs.quantities.split(",")
    console.log(tokenIds)
    console.log(quantities)

    const payload =
