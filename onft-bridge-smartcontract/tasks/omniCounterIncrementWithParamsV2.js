const { getDeploymentAddresses } = require("../utils/readStatic")
const CHAIN_ID = require("../constants/chainIds.json")

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    console.log(`
        [destination]: ${getDeploymentAddresses(taskArgs.targetNetwork)}, 
        [gasAmount]: ${taskArgs.gasAmount}, 
        [airDropEthQty]: ${taskArgs.airDropEthQty}, 
        [airDropAddr]: ${taskArgs.airDropAddr}
    `)
    const dstAddr = getDeploymentAddresses(taskArgs.targetNetwork)["OmniCounter"]
    const omniCounter = await ethers.getContract("OmniCounter")
    console.log(`[source] omniCounter.address: ${omniCounter.address}`)
    let tx = await (
        await omniCounter.incrementCounterWithAdapterParamsV2(
            dstChainId,
            dstAddr,
            taskArgs.gasAmount,
            taskArgs.airDropEthQty,
            taskArgs.airDropAddr,
            { value: ethers.utils.parseEther("1") } // estimate/guess
        )
    ).wait()
    console.log(
