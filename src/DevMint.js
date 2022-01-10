import React, { Component } from 'react'
import InputNumber from 'rc-input-number';

class DevMint extends Component {

  state = {
    mintQuantity: 1
  };

  handleInput = num => {
    this.setState({
    mintQuantity: num });
  };

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>DEV MINT</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.devMint(this.state.mintQuantity)
            }}>
              Mint Quantity:
              <InputNumber value={this.state.mintQuantity} onChange={this.handleInput} />
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="DEV MINT"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default DevMint;
