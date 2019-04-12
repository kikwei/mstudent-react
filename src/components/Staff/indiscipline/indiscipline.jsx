import React, { Component } from "react";
import axios from "axios";

class Indisciplines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: [],
      errors: []
    };
  }

  handleIndiscipline = event => {
    event.preventDefault();

    const authObj = JSON.parse(localStorage.Staff);
    const creator = authObj.email;
    const token = authObj.token;

    const indisciplineData = {
      student: event.target.student.value,
      comment: event.target.comment.value,
      reason: event.target.reason.value,
      official: creator,
      token
    };

    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(
        "http://127.0.01:9000/api/indiscipline",
        JSON.stringify(indisciplineData),
        headers
      )
      .then(response => {
        const errors = [];
        this.setState({ errors });
        const success = [...this.state.success];
        success.push({ success: "Indiscipline case recorded successfully." });
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
            <h2 className="text-center text-white mb-4">Indiscipline case.</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Indiscipline case</h3>
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
                    <form className="form" onSubmit={this.handleIndiscipline}>
                      <div className="form-group">
                        <label>Student</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="student"
                          id="student"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Reason</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="reason"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Comment</label>
                        <textarea
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="comment"
                          id="comment"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-info btn-lg float-right"
                      >
                        Record case
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

export default Indisciplines;
