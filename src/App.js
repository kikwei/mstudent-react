import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Register_courses from "./components/Student/register_courses";
import Entermarks from "./components/Staff/marks_entry";
import Landing from "./components/landing/landing";
import Dashboard from "./components/Dashboard/dashbord";

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
            <Route path="/login" component={Login} />

            {/* <Route exact path="/not-found" component={NotFound} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
