import React, { Component } from "react";
class Transfer extends Component {
  render() {
    console.log(this.props.transfer);
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.transfer.fullName}</td>
          <td>{this.props.transfer.adm}</td>
          <td>{this.props.transfer.approved_from}</td>
          <td>{this.props.transfer.approved_by}</td>
          <td>{this.props.transfer.comment}</td>
          <td>
            {this.props.transfer.approved === false
              ? "Not approved"
              : "Approved"}
          </td>
          <td>
            <button
              className="btn btn-sm btn-success"
              onClick={() => {
                this.props.onApproval(this.props.transfer);
              }}
            >
              Approve
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Transfer;
