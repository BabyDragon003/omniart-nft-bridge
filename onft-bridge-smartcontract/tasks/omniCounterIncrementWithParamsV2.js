const { getDeploymentAddresses } = require("../utils/readStatic")
const CHAIN_ID = require("../constants/chainIds.json")

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    console.log(`
        [destination]: ${getDeploymentAddresses(taskArgs.targetNetwork)}, 
        [gasAmount]: ${taskArgs.gasAmount}, 
        [airDropEthQty]: ${taskArgs.airDropEthQty}, 
        [airDropAddr]: ${taskArgs.airDropAddr}
            { value: ethers.utils.parseEther("1") } // estimate/guess
        )
    ).wait()
    console.log(
        `✅ Message Sent [${hre.network.name}] omniCounterIncrementWithParamsV2 on destination OmniCounter @ [${dstChainId}] [${dstAddr}]`
    )
    console.log(`tx: ${tx.transactionHash}`)

    console.log(``)
    console.log(`Note: to poll/wait for the message to arrive on the destination use the command:`)
    console.log("")
    console.log(`    $ npx hardhat --network ${taskArgs.targetNetwork} omniCounterPoll`)
}
