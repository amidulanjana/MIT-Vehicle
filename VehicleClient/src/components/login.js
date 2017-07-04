import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "./app";

class Login extends Component {
  render() {
    return (
      <div style={{ marginLeft: "30%" }}>
        <div
          id="loginbox"
          style={{ marginTop: "50px" }}
          className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
        >
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">Sign In</div>
              <div
                style={{
                  float: "right",
                  fontSize: "80%",
                  position: "relative",
                  top: "-10px"
                }}
              >
                <a href="#">Forgot password?</a>
              </div>
            </div>

            <div style={{ paddingTop: "30px" }} className="panel-body">
              <div
                style={{ display: "none" }}
                id="login-alert"
                className="alert alert-danger col-sm-12"
              />

              <form id="loginform" className="form-horizontal" role="form">
                <div style={{ marginBottom: "25px" }} className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>

                  <input
                    id="login-email"
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder="Email"
                  />
                </div>

                <div style={{ marginBottom: "25px" }} className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock" />
                  </span>
                  <input
                    id="login-password"
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                  />
                </div>

                <div className="input-group">
                  <div className="checkbox">
                    <label>
                      <input
                        id="login-remember"
                        type="checkbox"
                        name="remember"
                        value="1"
                      />
                      Remember me
                    </label>
                  </div>
                </div>

                <div style={{ marginTop: "10px" }} className="form-group">
                  <div className="col-sm-12 controls">
                    <a id="btn-login" href="/home" className="btn btn-success">
                      Login
                    </a>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12 control">
                    <div
                      style={{
                        borderTop: "1px solid#888",
                        paddingTop: "15px",
                        fontSize: "85%"
                      }}
                    >
                      Don't have an account!
                      <a href="#"> Sign Up Here</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
