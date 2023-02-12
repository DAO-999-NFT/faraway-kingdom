// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

error QueryForNonExistentToken();

contract NftFactory is ERC721 {
    uint256 public tokenCounter;
    string private rootUri;
    mapping(uint => string) FileNamesByID;

    event NftMinted(uint256 indexed tokenId);

    constructor(string memory name, string memory symbol, string memory _rootUri) ERC721(name, symbol) {
        tokenCounter = 0;
        rootUri = _rootUri;
    }

    function mintNft() public {
        _safeMint(msg.sender, tokenCounter);
        tokenCounter = tokenCounter + 1;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        if(!_exists(tokenId)) {
          revert QueryForNonExistentToken();
        }
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return tokenCounter;
    }
}