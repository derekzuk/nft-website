import React, { Component } from 'react'

class SetBaseURI extends Component {

  state = {
    baseURI: ""
  };

  handleInput = e => {
    this.setState({ baseURI: e.target.value });
  };

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>SetBaseURI</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.setBaseURI(this.state.baseURI)
            }}>
              Base URI:
              <input type="text" value={this.state.baseURI} onChange={this.handleInput} />
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="SetBaseURI"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default SetBaseURI;
