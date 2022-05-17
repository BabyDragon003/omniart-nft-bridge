const CHAIN_IDS = require("../constants/chainIds.json")

module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    ).wait()
    console.log(`send tx: ${tx.transactionHash}`)
}
