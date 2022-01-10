/*
SPDX-License-Identifier: GPL-3.0

Neighborhood
2021
*/

pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Neighborhood is ERC721, Ownable {
    uint256 public constant maxTokens = 100;
    uint256 public constant maxMintsPerTx = 10;
    uint256 public tokenPrice = 50000000000000000000; //50 FTM
    uint256 public startingBlock = 1;
    string private _contractURI;
    uint256 public nextTokenId = 1;
    bool public devMintLocked = false;

    constructor()
    public
    ERC721("Neighborhood", "HOOD")
    {}

    function withdraw()
    public
    onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    //Set Contract-level URI
    function setContractURI(string memory contractURI_)
    external
    onlyOwner
    {
        _contractURI = contractURI_;
    }


    //View Contract-level URI
    function contractURI()
    public
    view
    returns (string memory)
    {
        return _contractURI;
    }

    //Minting
    function mint(uint256 quantity)
    external
    payable
    {
        require(
            block.number >= startingBlock,
            "Sale hasn't started yet!"
        );
        require(
            quantity <= maxMintsPerTx,
            "There is a limit on minting too many at a time!"
        );
        require(
            nextTokenId - 1 + quantity <= maxTokens,
            "Minting this many would exceed supply!"
        );
        require(
            msg.value >= tokenPrice * quantity,
            "Not enough ether sent!"
        );
        require(
            msg.sender == tx.origin,
            "No contracts!"
        );
        for (uint256 i = 0; i < quantity; i++) {
            _safeMint(msg.sender, nextTokenId++);
        }
    }

    function setStartingBlock(uint256 _startingBlock)
    public
    onlyOwner
    {
        startingBlock = _startingBlock;
    }

    //Dev mint, to be disabled after an initial mint of 10 NFTs
    function devMint(uint256 quantity)
    external
    onlyOwner
    {
        require(!devMintLocked,
            "Dev Mint Permanently Locked"
        );
        require(
            block.number >= startingBlock,
            "Sale hasn't started yet!"
        );
        require(
            nextTokenId - 1 + quantity <= maxTokens,
            "Minting this many would exceed supply!"
        );
        for (uint256 i = 0; i < quantity; i++) {
            _safeMint(msg.sender, nextTokenId++);
        }
    }

    function lockDevMint()
    public
    onlyOwner
    {
        devMintLocked = true;
    }

}