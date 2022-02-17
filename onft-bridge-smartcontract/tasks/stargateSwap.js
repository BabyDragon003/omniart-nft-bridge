const CHAIN_ID = require("../constants/chainIds.json")
const { getDeploymentAddresses } = require("../utils/readStatic")

module.exports = async function (taskArgs, hre) {
    console.log(taskArgs)

    let signers = await ethers.getSigners()
    let owner = signers[0]
    let tx

    const erc20 = await ethers.getContractAt("ERC20", taskArgs.bridgeToken)
    console.log(`[${hre.network.name}] ERC20: ${erc20.address}`)
    const qty = taskArgs.qty
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    const dstStargateSwapAddr = getDeploymentAddresses(taskArgs.targetNetwork)["StargateSwap"]
        {
            dstGasForCall: 20000, // extra gas, if calling smart contract,
            dstNativeAmount: 0,   // amount of dust dropped in destination wallet
            dstNativeAddr: "0x",  // destination wallet for dust
        }
    )

    const fee = quoteData[0].mul(10).div(8) // + 20%
    console.log(`[${hre.network.name}] Stargate fee: ${fee.toString()} wei`)

    tx = await (
        await stargateSwap.swap(
            qty,
            taskArgs.bridgeToken,
            dstChainId,
            taskArgs.srcPoolId,
            taskArgs.dstPoolId,
            owner.address, // to address on destination
            dstStargateSwapAddr,
            { value: fee }
        )
    ).wait()
    console.log(`tx: ${tx.transactionHash}`)   
}
