import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  //   componentDidMount() {
  //     if (this.props.auth.isAuthenticated) {
  //       this.props.history.push('/dashboard');
  //     }
  //   }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">mStudent System.</h1>
                <p className="lead">
                  {" "}
                  The central place for student records in the 8-4-4 system.
                </p>
                <hr />
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
