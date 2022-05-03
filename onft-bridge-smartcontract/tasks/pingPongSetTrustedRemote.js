const CHAIN_ID = require("../constants/chainIds.json")
const { getDeploymentAddresses } = require("../utils/readStatic")

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    console.log(`✅ [${hre.network.name}] PingPong.setTrustedRemote( ${dstChainId}, ${dstPingPongAddr} )`)
    console.log(`...tx: ${tx.transactionHash}`)
}
