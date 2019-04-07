import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

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
      success: []
    };
  }

  handleSelectPeriod = selectedPeriod => {
    this.setState({ selectedPeriod });
  };

  handleRegister = event => {
    event.preventDefault();
    const authObj = JSON.parse(localStorage.Student);

    let selectedCourses = [];
    this.state.selectedOptions.forEach(course => {
      selectedCourses.push(course.label);
    });

    const selectedPeriod = this.state.selectedPeriod.label;

    const courseData = {
      courses: selectedCourses,
      period: selectedPeriod,
      student: authObj.user,
      token: authObj.token
    };

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };

    axios
      .post(
        "http://52.71.181.211/api/courses",
        JSON.stringify(courseData),
        headers
      )
      .then(response => {
        const errors = [];
        this.setState({ errors });
        const success = [...this.state.success];
        success.push({ success: "Courses registered successfully." });
        this.setState({ success });
      })
      .catch(error => {
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
              <h2 className="text-center text-white mb-4">Select Courses.</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="card rounded-0">
                    <div className="card-header">
                      <h3 className="mb-0">Course Registration</h3>
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
                      <form onSubmit={this.handleRegister}>
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
      </React.Fragment>
    );
  }
}

export default App;
