import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

const options = [
  { value: "english", label: "English" },
  { value: "kiswahili", label: "Kiswahil" },
  { value: "Maths", label: "Mathematics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" }
];

class MarksEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: [],
      errors: [],
      subjects: null,
      selectedSubjects: []
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

  handleRegister = event => {
    event.preventDefault();

    const authObj = JSON.parse(localStorage.Staff);
    const creator = authObj.user;
    const token = authObj.token;

    let scores = [];

    Array.from(event.target.score).forEach(input => scores.push(input.value));

    const marks = this.state.selectedSubjects.map((subject, key) => ({
      subject: subject,
      score: scores[key]
    }));

    const marksData = {
      student: event.target.student.value,
      marks,
      creator,
      token
    };

    const headers = {
      "Content-Type": "application/json"
    };

    console.log(headers);
    axios
      .post(
        "http://127.0.0.1:9000/api/marks",
        JSON.stringify(marksData),
        headers
      )
      .then(response => {
        const errors = [];
        this.setState({ errors });
        const success = [...this.state.success];
        success.push({ success: "Marks entered successfully." });
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
    const { subjects } = this.state;
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Marks Entry.</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card rounded-0">
                  <div className="card-header">
                    <h3 className="mb-0">Marks Entry</h3>
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
                        <label>Student</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded-0"
                          name="student"
                          id="student"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Select Courses</label>
                        <Select
                          value={subjects}
                          onChange={this.handleSelect}
                          placeholder="Select courses"
                          options={options}
                          isMulti
                          isSearchables
                        />
                      </div>

                      {this.state.selectedSubjects.length > 0
                        ? this.state.selectedSubjects.map((subject, key) => (
                            <div className="form-group" key={key}>
                              <label> {subject} marks</label>
                              <input
                                type="number"
                                className="form-control form-control-lg rounded-0"
                                name="score"
                                required=""
                              />
                            </div>
                          ))
                        : false}

                      <div />
                      <button
                        type="submit"
                        className="btn btn-info btn-lg float-right"
                      >
                        Submit Marks
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

export default MarksEntry;
