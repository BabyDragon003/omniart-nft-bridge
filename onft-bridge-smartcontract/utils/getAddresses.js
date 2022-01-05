const environments = require("../constants/environments.json")
const fs = require("fs")

const environmentArg = process.argv[2]
const contractCsvArg = process.argv[3]

async function getAddresses(environment, contractCsv) {
    let contracts = contractCsv.split(",")
    const promises = []
    for (const contract of contracts) {
        console.log(networkAddressStr)
    })
}

function getAddressForNetwork(file, network) {
    return new Promise((res) => {
        fs.readFile(file, (error, content) => {
            if (content === undefined) {
                console.log(`File: ${file} does not exsist`)
                return
            }
            res(`${network}: ${JSON.parse(content).address}`)
        })
    })
}

// to run: node getAddresses ${ENVIRONMENT} ${CONTRACT_CSV}
// example: node getAddresses testnet Relayer,Endpoint,UltraLightNode
getAddresses(environmentArg, contractCsvArg).then((res) => console.log("\nComplete!"))
