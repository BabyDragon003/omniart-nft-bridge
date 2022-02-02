const CHAIN_IDS = require("../constants/chainIds.json")
const ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    const proxyONFT1155 = await ethers.getContract("ProxyONFT1155")
    const dstChainId = CHAIN_IDS[taskArgs.targetNetwork]

    const endpoint = await ethers.getContractAt("ILayerZeroEndpoint", ENDPOINTS[hre.network.name])
            "0x",
            { value: fees[0] }
        )
    ).wait()
    console.log(`send tx: ${tx.transactionHash}`)
}
