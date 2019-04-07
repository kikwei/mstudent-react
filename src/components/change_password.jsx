import React, { Component } from "react";
import axios from "axios";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      success: []
    };
  }

  handleChangePasword = event => {
    event.preventDefault();

    const staffAuth =
      localStorage.Staff !== undefined ? JSON.parse(localStorage.Staff) : false;
    const staffStudent =
      localStorage.Student !== undefined
        ? JSON.parse(localStorage.Student)
        : false;

    const authObj = staffAuth ? staffAuth : staffStudent;
    if (event.target.password.value === event.target.confirm_password.value) {
      const passwordData = {
        old_password: event.target.old_password.value,
        password: event.target.password.value,
        token: authObj.token
      };

      console.log(passwordData);

      let headers = {
        "Content-Type": "application/json"
      };

      axios
        .post(
          "http://52.71.181.211/api/change_password",
          JSON.stringify(passwordData),
          headers
        )
        .then(response => {
          this.setState({ errors: [] });

          const success = [...this.state.success];
          console.log(response.data);
          success.push({ success: "Password changed successfully" });
          this.setState({ success });
        })
        .catch(error => {
          console.log(error.response);
          const errors = [...this.state.errors];
          errors.push(error.response.data);
          this.setState({ errors });
        });
    } else {
      const errors = [...this.state.errors];
      errors.push({ error: "Passwords does not match" });
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Change Password.</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Change Password</h3>
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
                    <form className="form" onSubmit={this.handleChangePasword}>
                      <div className="form-group">
                        <label>Old password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-0"
                          name="old_password"
                          placeholder="Old password"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      <div className="form-group">
                        <label>New Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-0"
                          placeholder="New password"
                          name="password"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded-0"
                          placeholder="Confirm password"
                          name="confirm_password"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg float-right"
                        id="btnLogin"
                      >
                        submit
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

export default ChangePassword;
