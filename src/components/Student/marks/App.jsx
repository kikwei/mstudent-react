import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Marks from "./marks";

const periodOptions = [
  { value: "2019-sem-one", label: "2019 Sem one" },
  { value: "2019-sem-two", label: "2019 Sem two" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPeriod: null,
      errors: [],
      success: [],
      marks: []
    };
  }

  handleSelectPeriod = selectedPeriod => {
    const period = selectedPeriod.label;
    const authObj = JSON.parse(localStorage.Student);
    this.setState({ selectedPeriod });

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };

    axios
      .get(
        "http://localhost:9000/api/marks?student=" +
          authObj.user +
          "&token=" +
          authObj.token +
          "&period=" +
          period,
        headers
      )
      .then(response => {
        console.log(response);
        const errors = [];
        this.setState({ errors });
        this.setState({ marks: response.data });
      })
      .catch(error => {
        console.log(error);
        const success = [];
        this.setState({ success });
        const errors = [...this.state.errors];
        errors.push(error.response.data);
        this.setState({ errors });
      });
  };

  render() {
    const { selectedPeriod } = this.state;

    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center text-white mb-4">Select Period.</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card rounded-0">
                    <div className="card-header">
                      <h3 className="mb-0">View marks</h3>
                    </div>
                    <div className="card-body">
                      {this.state.errors.length > 0 ? (
                        <small>
                          {
                            Object.values(
                              this.state.errors[this.state.errors.length - 1]
                            )[0]
                          }
                        </small>
                      ) : (
                        false
                      )}

                      {this.state.success.length > 0 ? (
                        <small>
                          {
                            Object.values(
                              this.state.success[this.state.success.length - 1]
                            )[0]
                          }
                        </small>
                      ) : (
                        false
                      )}
                      <form>
                        <div className="form-group">
                          <label>Select period</label>
                          <Select
                            value={selectedPeriod}
                            onChange={this.handleSelectPeriod}
                            placeholder="Select period"
                            options={periodOptions}
                            isSearchables
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  {this.state.marks.length > 0 ? (
                    <Marks marks={this.state.marks[0]} />
                  ) : (
                    <h6>No marks Available for the selected period.</h6>
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
