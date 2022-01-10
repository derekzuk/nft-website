import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { NEIGHBORHOOD_ABI, NEIGHBORHOOD_ADDRESS } from './config'
import Mint from './Mint'
import DevMint from './DevMint'
import SetContractURI from './SetContractURI'
import SetBaseURI from './SetBaseURI'
import Withdraw from './Withdraw'

//Some good notes here: https://github.com/rene78/erc-721
class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
  console.log(window.web3.currentProvider.chainId);
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    if (window.web3.currentProvider.chainId != "0xfa") {
      console.log("Please connect to Fantom. Neighborhood NFT resides on Fantom mainnet.")
      this.state.expectedNetwork = false;
    } else {
      this.state.expectedNetwork = true;
    }
//    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
//    const web3 = new Web3(Web3.givenProvider || "https://ropsten.infura.io/v3/1eb1d5d85a214024b363b8e07138f02e")
//    const web3 = new Web3(Web3.givenProvider || "https://rpc.testnet.fantom.network/")
    const web3 = new Web3(Web3.givenProvider || "https://rpc.ftm.tools/")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    this.setState({ loading: false })

    // NEIGHBORHOOD contract
    const neighborhood = new web3.eth.Contract(NEIGHBORHOOD_ABI, NEIGHBORHOOD_ADDRESS)
    this.setState({ neighborhood })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      taskCount: 0,
      tasks: [],
      loading: true,
      expectedNetwork: false
    }

    this.createTask = this.createTask.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  createTask(content) {
    this.setState({ loading: true })
    this.state.todoList.methods.createTask(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  toggleCompleted(taskId) {
    this.setState({ loading: true })
    this.state.todoList.methods.toggleCompleted(taskId).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  mint(mintQuantity) {
    // this.setState({ loading: true }) // Why is this.setState not a function in browser?
    const mintEthValue = mintQuantity * 50000000000000000000

    if (window.web3.currentProvider.chainId == "0xfa") {
      this.state.neighborhood.methods.mint(mintQuantity).send({ from: this.state.account, value: mintEthValue })
    }
  }

  devMint(mintQuantity) {
    this.state.neighborhood.methods.devMint(mintQuantity).send({ from: this.state.account })
  }

  setContractURI(contractURI) {
    this.state.neighborhood.methods.setContractURI(contractURI).send({ from: this.state.account })
  }

  setBaseURI(baseURI) {
    this.state.neighborhood.methods.setBaseURI(baseURI).send({ from: this.state.account })    
  }

  withdraw() {
    this.state.neighborhood.methods.withdraw().send({ from: this.state.account })
  }

  render() {
    return (
      <div className="all">
        {!this.state.expectedNetwork ? 
          <div className="header-text">Connect to Fantom mainnet before minting</div> 
          :
          <div></div>
        }
        <br></br>
          <h1 className="header-text">Neighborhood</h1>
          <div className="container-fluid">
            <div className="col-lg-12 d-flex justify-content-center">
              <img className="header-image" src = "14.jpg" alt = "" height = "480" width = "640"/>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex justify-content-center">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <Mint
                    expectedNetwork={this.state.expectedNetwork}
                    account={this.state.account}
                    mint={this.mint}
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="header-text">
            <div className="about-text">'Neighborhood' is a collection of 144 photos that were taken around the neighborhood during sunny days in October 2021. Deployed to Fantom mainnet.</div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex justify-content-center">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <DevMint
                    account={this.state.account}
                    devMint={this.devMint}
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex justify-content-center">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <SetContractURI
                    account={this.state.account}
                    setContractURI={this.setContractURI}
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex justify-content-center">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <SetBaseURI
                    account={this.state.account}
                    setBaseURI={this.setBaseURI}
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex justify-content-center">
                { this.state.loading
                  ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                  : <Withdraw
                    account={this.state.account}
                    withdraw={this.withdraw}
                    state={this.state}/> // Why do I have to do this?
                }
              </main>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
