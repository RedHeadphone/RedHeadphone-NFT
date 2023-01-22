// SPDX-License-Identifier: UnLicensed
pragma solidity >=0.8.17;

import "erc721a/contracts/ERC721A.sol";

contract RedHeadphoneNFT is ERC721A {
    uint maxSupply = 100;

    constructor() ERC721A("Red Headphone NFT", "RedH") {
        _mint(msg.sender, maxSupply);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmUiXCHYpzxGBvf1jSBDr2Q2Jz5QFifBry4zqbzwda6d1o/";
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId<maxSupply,"Invalid Token ID");

        string memory baseURI = _baseURI();
        return string(abi.encodePacked(baseURI, _toString(tokenId+1),".json"));
    }

}