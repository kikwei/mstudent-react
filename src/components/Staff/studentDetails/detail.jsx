import React, { Component } from "react";
class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="card rounded-0">
                    <div className="card-header">
                      <h3 className="mb-0">Student Details</h3>
                    </div>
                    <div className="card-body">
                      <h1 className="header">
                        {this.props.detail.profile.fullName}
                      </h1>
                      <h3 className="text-centre">
                        {this.props.detail.profile.adm}
                      </h3>

                      <h4>Academics Report.</h4>
                      <table className="table table-bordered table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Period</th>
                          </tr>
                        </thead>

                        <tbody>
                          {this.props.detail.marks.map(entry =>
                            entry.marks.map((mark, key) => (
                              <tr key={key}>
                                <td>{mark.subject}</td>
                                <td>{mark.score}</td>
                                <td>{entry.period}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                      <br />
                      <br />
                      <h4>Disciplinary cases.</h4>
                      <table className="table table-bordered table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Reason</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Staff recorded</th>
                            <th scope="col">Recorded on</th>
                          </tr>
                        </thead>

                        <tbody>
                          {this.props.detail.disciplinary.map((cas, key) => (
                            <tr key={key}>
                              <td>{cas.reason}</td>
                              <td>{cas.comment}</td>
                              <td>{cas.official}</td>
                              <td>{cas.created_on}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default Detail;
