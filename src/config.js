//export const NEIGHBORHOOD_ADDRESS ='0xEa58Fb606CFBab2F5F2d940503EC62550e7aD6B6' // local/ganache
//export const NEIGHBORHOOD_ADDRESS ='0xd23c4A3780aE4311aAc756e5BfEe9AfDf7dA4abD' // ropsten
//export const NEIGHBORHOOD_ADDRESS ='0x6a1217Da04a7fFC433F8DEBd38280b12b96E62C9' // fantom testnet
export const NEIGHBORHOOD_ADDRESS ='0xE02E7dc0700bdf590918E50EC2dd3AcCc88B58A8' // fantom mainnet

export const NEIGHBORHOOD_ABI = [
                                    {
                                      "inputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "constructor"
                                    },
                                    {
                                      "anonymous": false,
                                      "inputs": [
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "owner",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "approved",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": true,
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "Approval",
                                      "type": "event"
                                    },
                                    {
                                      "anonymous": false,
                                      "inputs": [
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "owner",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "operator",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": false,
                                          "internalType": "bool",
                                          "name": "approved",
                                          "type": "bool"
                                        }
                                      ],
                                      "name": "ApprovalForAll",
                                      "type": "event"
                                    },
                                    {
                                      "anonymous": false,
                                      "inputs": [
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "previousOwner",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "newOwner",
                                          "type": "address"
                                        }
                                      ],
                                      "name": "OwnershipTransferred",
                                      "type": "event"
                                    },
                                    {
                                      "anonymous": false,
                                      "inputs": [
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "from",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": true,
                                          "internalType": "address",
                                          "name": "to",
                                          "type": "address"
                                        },
                                        {
                                          "indexed": true,
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "Transfer",
                                      "type": "event"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "to",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "approve",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "owner",
                                          "type": "address"
                                        }
                                      ],
                                      "name": "balanceOf",
                                      "outputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "",
                                          "type": "uint256"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "devMintLocked",
                                      "outputs": [
                                        {
                                          "internalType": "bool",
                                          "name": "",
                                          "type": "bool"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "getApproved",
                                      "outputs": [
                                        {
                                          "internalType": "address",
                                          "name": "",
                                          "type": "address"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "owner",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "address",
                                          "name": "operator",
                                          "type": "address"
                                        }
                                      ],
                                      "name": "isApprovedForAll",
                                      "outputs": [
                                        {
                                          "internalType": "bool",
                                          "name": "",
                                          "type": "bool"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "maxMintsPerTx",
                                      "outputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "",
                                          "type": "uint256"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "maxTokens",
                                      "outputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "",
                                          "type": "uint256"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "name",
                                      "outputs": [
                                        {
                                          "internalType": "string",
                                          "name": "",
                                          "type": "string"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "nextTokenId",
                                      "outputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "",
                                          "type": "uint256"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "owner",
                                      "outputs": [
                                        {
                                          "internalType": "address",
                                          "name": "",
                                          "type": "address"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "ownerOf",
                                      "outputs": [
                                        {
                                          "internalType": "address",
                                          "name": "",
                                          "type": "address"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "renounceOwnership",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "from",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "address",
                                          "name": "to",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "safeTransferFrom",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "from",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "address",
                                          "name": "to",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        },
                                        {
                                          "internalType": "bytes",
                                          "name": "_data",
                                          "type": "bytes"
                                        }
                                      ],
                                      "name": "safeTransferFrom",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "operator",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "bool",
                                          "name": "approved",
                                          "type": "bool"
                                        }
                                      ],
                                      "name": "setApprovalForAll",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [],
                                      "name": "startingBlock",
                                      "outputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "",
                                          "type": "uint256"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "bytes4",
                                          "name": "interfaceId",
                                          "type": "bytes4"
                                        }
                                      ],
                                      "name": "supportsInterface",
                                      "outputs": [
                                        {
                                          "internalType": "bool",
                                          "name": "",
                                          "type": "bool"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "symbol",
                                      "outputs": [
                                        {
                                          "internalType": "string",
                                          "name": "",
                                          "type": "string"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [],
                                      "name": "tokenPrice",
                                      "outputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "",
                                          "type": "uint256"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "tokenURI",
                                      "outputs": [
                                        {
                                          "internalType": "string",
                                          "name": "",
                                          "type": "string"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "from",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "address",
                                          "name": "to",
                                          "type": "address"
                                        },
                                        {
                                          "internalType": "uint256",
                                          "name": "tokenId",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "transferFrom",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "address",
                                          "name": "newOwner",
                                          "type": "address"
                                        }
                                      ],
                                      "name": "transferOwnership",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [],
                                      "name": "withdraw",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "string",
                                          "name": "contractURI_",
                                          "type": "string"
                                        }
                                      ],
                                      "name": "setContractURI",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [],
                                      "name": "contractURI",
                                      "outputs": [
                                        {
                                          "internalType": "string",
                                          "name": "",
                                          "type": "string"
                                        }
                                      ],
                                      "stateMutability": "view",
                                      "type": "function",
                                      "constant": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "quantity",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "mint",
                                      "outputs": [],
                                      "stateMutability": "payable",
                                      "type": "function",
                                      "payable": true
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "_startingBlock",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "setStartingBlock",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [
                                        {
                                          "internalType": "uint256",
                                          "name": "quantity",
                                          "type": "uint256"
                                        }
                                      ],
                                      "name": "devMint",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    },
                                    {
                                      "inputs": [],
                                      "name": "lockDevMint",
                                      "outputs": [],
                                      "stateMutability": "nonpayable",
                                      "type": "function"
                                    }
                                  ]