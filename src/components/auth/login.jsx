import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  handleLogIn = event => {
    event.preventDefault();

    const logInData = {
      username: event.target.username.value,
      password: event.target.password.value
    };

    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };

    axios
      .post(
        "http://127.0.0.1:9000/api/login",
        JSON.stringify(logInData),
        headers
      )
      .then(response => {
        logInData.username.includes("@")
          ? localStorage.setItem("Staff", JSON.stringify(response.data))
          : localStorage.setItem("Student", JSON.stringify(response.data));
        window.location.href = "/dashboard";
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
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">mStudent Log In.</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Login</h3>
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
                    <form className="form" onSubmit={this.handleLogIn}>
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="username"
                          placeholder="Username or email"
                          id="email"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-0"
                          name="password"
                          id="pwd1"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>
                      <div />
                      <button
                        type="submit"
                        className="btn btn-success btn-lg float-right"
                        id="btnLogin"
                      >
                        Login
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

export default Login;
