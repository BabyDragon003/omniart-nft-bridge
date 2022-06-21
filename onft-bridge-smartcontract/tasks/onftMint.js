module.exports = async function (taskArgs, hre) {
    let contract = await ethers.getContract(taskArgs.contract)

    try {
        let tx = await (await contract.mint({value: ethers.utils.parseEther("0.0004")})).wait()
            console.log("*ONFT: Max limit reached*")
        } else {
            console.log(e)
        }
    }
}

// npx hardhat --network bsc-testnet onftMint --contract ExampleUniversalONFT721
// npx hardhat --network fuji onftMint --contract ExampleUniversalONFT721