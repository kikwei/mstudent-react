import React, { Component } from "react";
import Case from "./indiscipline";

class Indisciplines extends Component {
  renderIndisciplines() {
    if (this.props.cases.length === 0) return;
    return (
      <div>
        <div className="row m-2">
          <div className="col-md-4.5 offset-md-2">
            <div>
              <table className="table table-bordered table-responsive">
                <tbody>
                  <tr>
                    <th className="text-centre">Reason</th>
                    <th className="text-centre">Comment</th>
                    <th className="text-centre">Day</th>
                  </tr>
                  {this.props.cases.map((indiscipli, key) => (
                    <Case indiscipline={indiscipli} key={key} />
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
    console.log(this.props.cases);
    return <React.Fragment>{this.renderIndisciplines()}</React.Fragment>;
  }
}

export default Indisciplines;
