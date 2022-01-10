import React, { Component } from 'react'

class SetContractURI extends Component {

  state = {
    contractURI: ""
  };

  handleInput = e => {
    this.setState({ contractURI: e.target.value });
  };

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>SetContractURI</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.setContractURI(this.state.contractURI)
            }}>
              Contract URI:
              <input type="text" value={this.state.contractURI} onChange={this.handleInput} />
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="SetContractURI"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default SetContractURI;
