const ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function (taskArgs, hre) {
    const EndpointAbi = [
        "function storedPayload(uint16, bytes) external view returns (uint64, address, bytes32)",
        "function hasStoredPayload(uint16, bytes calldata) external view returns (bool)",
        "function retryPayload(uint16, bytes, bytes)"
    ];

    // console.log({taskArgs})
    const endpoint = await ethers.getContractAt(EndpointAbi, ENDPOINTS[hre.network.name]);

    // concat remote and local address
    let remoteAndLocal = hre.ethers.utils.solidityPack(
        ['address','address'],
