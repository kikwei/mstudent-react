import React, { Component } from "react";
import Transfer from "./transfer";

class Transfers extends Component {
  renderTransfers() {
    if (this.props.transfers.length === 0) return;
    return (
      <div>
        <div className="row m-2">
          <div className="col-md-4.5 offset-md-2">
            <div>
              <table className="table table-bordered table-responsive">
                <tbody>
                  <tr>
                    <th className="text-centre">Student</th>
                    <th className="text-centre">Admission number</th>
                    <th className="text-centre">Transfer from</th>
                    <th className="text-centre">Approved by</th>
                    <th className="text-centre">Comment</th>
                    <th className="text-centre">Status</th>
                    <th className="text-centre" colSpan="1">
                      Actions
                    </th>
                  </tr>
                  {this.props.transfers.map((transfer, key) => (
                    <Transfer
                      transfer={transfer}
                      key={key}
                      onApprove={this.props.onApprove}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <React.Fragment>{this.renderTransfers()}</React.Fragment>;
  }
}

export default Transfers;
