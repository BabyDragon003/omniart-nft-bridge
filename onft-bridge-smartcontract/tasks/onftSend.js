const CHAIN_ID = require("../constants/chainIds.json")

module.exports = async function (taskArgs, hre) {
    const signers = await ethers.getSigners()
    const owner = signers[0]
    const toAddress = owner.address;
    const tokenId = taskArgs.tokenId
    // get remote chain id
    const remoteChainId = CHAIN_ID[taskArgs.targetNetwork]

    // get local contract
    const onft = await ethers.getContract(taskArgs.contract)

    // quote fee with default adapterParams
    const adapterParams = ethers.utils.solidityPack(["uint16", "uint256"], [1, 2000]) // default adapterParams example

    const fees = await onft.estimateSendFee(remoteChainId, toAddress, tokenId, false, adapterParams)
    const nativeFee = fees[0]
    console.log(`native fees (wei): ${nativeFee}`)

