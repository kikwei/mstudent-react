import React, { Component } from "react";
import Mark from "./mark";

class Marks extends Component {
  renderMarks() {
    if (this.props.marks.length === 0) return;
    return (
      <div>
        <div className="row m-2">
          <div className="col-md-4.5 offset-md-2">
            <div>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Period</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.marks.marks.map((mark, key) => (
                    <Mark
                      mark={mark}
                      period={this.props.marks.period}
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
    return <React.Fragment>{this.renderMarks()}</React.Fragment>;
  }
}

export default Marks;
