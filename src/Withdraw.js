import React, { Component } from 'react'

class Withdraw extends Component {

  render() {
    return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 d-flex text-center">
          <div className="content mr-auto ml-auto">
            <h1>Withdraw</h1>
            <form onSubmit={(event) => {
              event.preventDefault()
              this.props.withdraw()
            }}>
              <input
                type="submit"
                className="btn btn-block btn-primary"
                value="Withdraw"
              />
            </form>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

export default Withdraw;
