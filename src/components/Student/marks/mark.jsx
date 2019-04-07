import React, { Component } from "react";
class Mark extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.mark.subject}</td>
          <td>{this.props.mark.score}</td>
          <td>{this.props.period}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Mark;
