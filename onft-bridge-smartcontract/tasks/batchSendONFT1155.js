const CHAIN_IDS = require("../constants/chainIds.json")
const ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    const onft1155 = await ethers.getContract("ONFT1155")
    const dstChainId = CHAIN_IDS[taskArgs.targetNetwork]

    const tokenIds = taskArgs.tokenIds.split(",")
        await onft1155.sendBatch(dstChainId, owner.address, tokenIds, quantities, owner.address, ethers.constants.AddressZero, "0x", {
            value: fees[0],
        })
    ).wait()
    console.log(`send tx: ${tx.transactionHash}`)
}
