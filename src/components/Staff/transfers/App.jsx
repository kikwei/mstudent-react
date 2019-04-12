import React, { Component } from "react";
import Transfers from "./transfers";
import axios from "axios";

class Transfrs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      transfers: []
    };
  }

  componentDidMount() {
    const authObj = JSON.parse(localStorage.Staff);

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };

    axios
      .get(
        "http://127.0.01:9000/api/transfers?school=" +
          authObj.school +
          "&token=" +
          authObj.token,
        headers
      )
      .then(response => {
        const transfers = [...this.state.transfers];
        if (response.data.length > 0) {
          transfers.push(response.data);
          this.setState({ transfers });
        }
      })
      .catch(error => {
        console.log(error);
        const errors = [...this.state.errors];
        errors.push(error.response.data);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        {this.state.transfers.length > 0 ? (
          <Transfers
            transfers={this.state.transfers[0]}
            onApprove={this.handleTransferApproval}
          />
        ) : (
          <h4>There are no transfers to approve</h4>
        )}
      </div>
    );
  }
}

export default Transfrs;
