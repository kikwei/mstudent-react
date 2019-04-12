import React, { Component } from "react";
import Detail from "./detail";

class Details extends Component {
  renderDetails() {
    console.log(this.props.details);
    if (this.props.details.length === 0) return;
    return (
      <div>
        {this.props.details.map((detail, key) => (
          <Detail detail={detail} key={key} onApprove={this.props.onApprove} />
        ))}
      </div>
    );
  }
  render() {
    return <React.Fragment>{this.renderDetails()}</React.Fragment>;
  }
}

export default Details;
