import React, { Component } from "react";
import axios from "axios";

class InitiateTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: [],
      errors: [],
      subjects: null,
      selectedSubjects: [],
      selectedPeriod: null
    };
  }

  handleSelect = subjects => {
    this.setState({ subjects });

    setTimeout(() => {
      let selectedSubjects = [];
      this.state.subjects.forEach(course => {
        selectedSubjects.push(course.label);
      });

      this.setState({ selectedSubjects });
    });
  };

  handleTransfer = event => {
    event.preventDefault();

    const authObj = JSON.parse(localStorage.Staff);
    const creator = authObj.email;
    const token = authObj.token;

    const transferData = {
      student: event.target.student.value,
      comment: event.target.comment.value,
      transfer_to: event.target.transfer_to.value,
      approved_by: creator,
      token
    };

    console.log(transferData);

    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(
        "http://52.71.181.211/api/transfers",
        JSON.stringify(transferData),
        headers
      )
      .then(response => {
        const errors = [];
        this.setState({ errors });
        const success = [...this.state.success];
        success.push({ success: "Transfer initiated successfully." });
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
            <h2 className="text-center text-white mb-4">Transfer.</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Transfer</h3>
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
                    <form className="form" onSubmit={this.handleTransfer}>
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
                        <label>transfer to</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="transfer_to"
                          id="school"
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
                        Initiate transfer
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

export default InitiateTransfer;
