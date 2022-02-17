const shell = require('shelljs')
const {TEST_CHAINS, CHAINS} = require('../constants/networks');

module.exports = async function (taskArgs, hre) {
    let localContract, remoteContract;
    let networks;
    if (taskArgs.task == "test") {
        networks = TEST_CHAINS;
    } else {
        networks = CHAINS;
    }

    let nft_num = parseInt(taskArgs.nfts);
    let nft_startid = 1;
    let nft_endid = 0;
        //     const result = await shell.exec(deployCommand)
        //     if (result.code != 0) {
        //         return;
        //     }
        // } catch (e) {
        //     return;
        // }
    }
}
