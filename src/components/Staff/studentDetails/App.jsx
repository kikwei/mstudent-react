import React, { Component } from "react";
import StudentDetails from "./details";
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      success: [],
      details: []
    };
  }

  handleGetdetails = event => {
    event.preventDefault();
    const authObj = JSON.parse(localStorage.Staff);

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };

    const studentDetails = {
      adm: event.target.adm.value,
      token: authObj.token
    };

    axios
      .post(
        "http://127.0.0.1:9000/api/student_details",
        JSON.stringify(studentDetails),
        headers
      )
      .then(response => {
        console.log(response.data);
        const details = [...this.state.details];
        details.push(response.data);
        this.setState({ details });
      })
      .catch(error => {
        console.log(error);
        const errors = [...this.state.errors];
        errors.push(error.response.data);
        this.setState({ errors });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.details.length === 0 ? (
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 mx-auto">
                    <div className="card rounded-0">
                      <div className="card-header">
                        <h3 className="mb-0">View student details</h3>
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
                                this.state.success[
                                  this.state.success.length - 1
                                ]
                              )[0]
                            }
                          </small>
                        ) : (
                          false
                        )}
                        <form className="form" onSubmit={this.handleGetdetails}>
                          <div className="form-group">
                            <label>Student</label>
                            <input
                              type="text"
                              className="form-control form-control-lg rounded-0"
                              name="adm"
                              id="adm"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-info btn-lg float-right"
                          >
                            Get details
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <StudentDetails details={this.state.details} />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Details;
