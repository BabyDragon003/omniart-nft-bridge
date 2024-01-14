const CHAIN_ID = require("../constants/chainIds.json")
const { getDeploymentAddresses } = require("../utils/readStatic")

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    const dstPingPongAddr = getDeploymentAddresses(taskArgs.targetNetwork)["PingPong"]
    // get local contract instance
    const pingPong = await ethers.getContract("PingPong")
    console.log(`[source] pingPong.address: ${pingPong.address}`)

