// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./token/onft/ONFT721.sol";

contract H2W721 is ONFT721 {
    uint public fee = 0.0005 ether;

    uint public nextMintId;
    uint public maxMintId;
    string public baseURI;

    /// @notice Constructor for the UniversalONFT
    /// @param _layerZeroEndpoint handles message transmission across chains
    /// @param _startMintId the starting mint number on this chain
    /// @param _endMintId the max number of mints on this chain
    constructor(
    string memory name,
    string memory symbol,
        return lzEndpoint.estimateFees(_dstChainId, payable(address(this)), payload, _useZro, _adapterParams);
    }

    function bridgeGas(uint16 _dstChainId, address _zroPaymentAddress, bytes memory _adapterParams) public payable {
        _checkGasLimit(_dstChainId, FUNCTION_TYPE_SEND, _adapterParams, dstChainIdToTransferGas[_dstChainId]);
        _lzSend(_dstChainId, abi.encode(msg.sender,0), payable(address(this)), _zroPaymentAddress, _adapterParams, msg.value);
    }

    function tokenURI(uint256 id) public view virtual override returns (string memory){
        return string(abi.encodePacked(_baseURI(), name(), "_", Strings.toString(id)));
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _baseUri) public onlyOwner {
        baseURI = _baseUri;
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }

    function setFee(uint _fee) external onlyOwner {
        fee = _fee;
    }

    function tokensOfOwner(address _owner) external view returns(uint256[] memory) {
        uint tokenCount = balanceOf(_owner);
        uint256[] memory tokensIds = new uint256[](tokenCount);
        for(uint i = 0; i < tokenCount; i++){
          tokensIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensIds;
    }
}