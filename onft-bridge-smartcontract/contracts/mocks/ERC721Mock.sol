// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// for mock purposes only, no limit on minting functionality
contract ERC721Mock is ERC721 {
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    string public baseTokenURI;

    function mint(address to, uint tokenId) public {
        _safeMint(to, tokenId, "");
    }
