import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  logOut = event => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "/login";
  };

  componentDidMount() {
    if (localStorage.Student === undefined && localStorage.Staff === undefined)
      window.location.href = "/login";
  }
  render() {
    return (
      <div className="left-side">
        <div className="logo">
          <a href="">
            <img src="img/logo.jpg" alt="" />
          </a>
        </div>
        <div className="left-content">
          <ul role="tablist">
            {localStorage.Staff !== undefined ? (
              <li>
                <Link to="/dashboard/register">Register Student</Link>
              </li>
            ) : (
              false
            )}

            {localStorage.Staff !== undefined ? (
              <li>
                <Link to="/dashboard/enter_marks">Enter Student Marks</Link>
              </li>
            ) : (
              false
            )}

            {localStorage.Staff !== undefined ? (
              <li>
                <Link to="/dashboard/transfers">Transfers</Link>
              </li>
            ) : (
              false
            )}

            {localStorage.Student !== undefined ? (
              <li>
                <Link to="/dashboard/register_courses">Register Courses</Link>
              </li>
            ) : (
              false
            )}

            {localStorage.Student !== undefined ? (
              <li>
                <Link to="/dashboard/get_marks">Marks</Link>
              </li>
            ) : (
              false
            )}
            <li>
              <Link to="" onClick={event => this.logOut(event)}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; 2019.
            <a href="#">mStudent</a>
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
