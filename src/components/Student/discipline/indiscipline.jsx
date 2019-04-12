import React, { Component } from "react";
class Indiscipline extends Component {
  render() {
    console.log(this.props.indiscipline);
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.indiscipline.reason}</td>
          <td>{this.props.indiscipline.comment}</td>
          <td>{this.props.indiscipline.created_on}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Indiscipline;
