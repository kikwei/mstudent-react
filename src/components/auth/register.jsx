import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: [],
      errors: []
    };
  }
  handleRegister = event => {
    event.preventDefault();

    const authObj = JSON.parse(localStorage.Staff);
    const creator = authObj.email;
    const token = authObj.token;

    const studentData = {
      fullName: event.target.fullName.value,
      dob: event.target.dob.value,
      school: event.target.school.value,
      adm: event.target.adm.value,
      creator,
      token
    };

    const headers = {
      "Content-Type": "application/json"
    };

    console.log(headers);
    axios
      .post(
        "http://127.0.01:9000/api/students",
        JSON.stringify(studentData),
        headers
      )
      .then(response => {
        const errors = [];
        this.setState({ errors });
        const success = [...this.state.success];
        success.push({ success: "Student registered successfully." });
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
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Register student.</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Register student</h3>
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
                    <form className="form" onSubmit={this.handleRegister}>
                      <div className="form-group">
                        <label>Fullname</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="fullname"
                          id="fullName"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      <div className="form-group">
                        <label>School</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="school"
                          id="school"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                          type="date"
                          className="form-control form-control-lg rounded-0"
                          name="dob"
                          id="dob"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Admission number</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="adm"
                          id="adm"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Enter your adm too!
                        </div>
                      </div>
                      <div />
                      <button
                        type="submit"
                        className="btn btn-success btn-lg float-right"
                        id="btnLogin"
                      >
                        Register student
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
