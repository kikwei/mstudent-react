import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Cases from "./indisciplines";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      success: [],
      cases: []
    };
  }

  componentDidMount() {
    const authObj = JSON.parse(localStorage.Student);

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };

    axios
      .get(
        "http://127.0.01:9000/api/indiscipline?student=" +
          authObj.user +
          "&token=" +
          authObj.token,
        headers
      )
      .then(response => {
        console.log(response);
        const errors = [];
        this.setState({ errors });
        this.setState({ cases: response.data });
      })
      .catch(error => {
        console.log(error);
        const success = [];
        this.setState({ success });
        const errors = [...this.state.errors];
        errors.push(error.response.data);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  {this.state.cases.length > 0 ? (
                    <Cases cases={this.state.cases} />
                  ) : (
                    <h6>
                      No indiscipline cases Available for the selected period.
                    </h6>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
