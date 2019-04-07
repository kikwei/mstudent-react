import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Register_courses from "./components/Student/register_courses";
import Entermarks from "./components/Staff/marks/marks_entry";
import Marks from "./components/Student/marks/App";
import Transfers from "./components/Staff/transfers/App";
import InitiateTransfer from "./components/Staff/transfers/initiate_transfer";
import Landing from "./components/landing/landing";
import Dashboard from "./components/Dashboard/dashbord";
import ChangePassword from "./components/change_password";

import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/register" component={Register} />
            <Route
              path="/dashboard/register_courses"
              component={Register_courses}
            />
            <Route path="/dashboard/enter_marks" component={Entermarks} />
            <Route path="/dashboard/get_marks" component={Marks} />
            <Route path="/dashboard/transfers" component={Transfers} />
            <Route
              path="/dashboard/initiate_transfer"
              component={InitiateTransfer}
            />
            <Route
              path="/dashboard/change_password"
              component={ChangePassword}
            />
            <Route path="/login" component={Login} />

            {/* <Route exact path="/not-found" component={NotFound} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
