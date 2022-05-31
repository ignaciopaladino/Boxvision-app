import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "react";

import { makeStyles } from "@material-ui/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { Header } from "../../components/Header";
import { auth } from "../../actions/auth";
import classes from "./Auth.css";
import store from "../../../store";
import Typography from "@material-ui/core/Typography";

const isAuth = {
  isAuthenticated: localStorage.getItem("isAuthBayer") === "true",
  authenticate(cb) {
    this.isAuthenticated = true;
    localStorage.setItem("isAuthBayer", true);
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200,
    fontSize: "2em"
  },
  label: {
    fontSize: "2em"
  }
}));

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
  }

  handleChange = prop => event => {
    this.setState({ ...this.state, [prop]: event.target.value });
    //    setValues({ ...values, [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  submitHandler = () => {
    store.dispatch(auth(this.state.username, this.state.password));
  };

  authDone = () => {
    console.log("AUTH DONE");
  };

  render() {
    return (
      <div>
        <Paper>
          <FormControl
            style={{
              width: "25%",
              marginLeft: "35%",
              marginTop: "50px",
              marginBottom: "50px"
            }}
          >
            <Grid container spacing={8} alignItems="flex-end">
              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                style={{
                  width: "100%"
                }}
              >
                <Grid
                  item
                  style={{
                    width: "10%"
                  }}
                >
                  <AccountCircle />
                </Grid>
                <Grid
                  item
                  style={{
                    width: "90%"
                  }}
                >
                  <TextField
                    id="input-with-icon-grid"
                    label="Nombre de Usuario"
                    onChange={this.handleChange("username")}
                    style={{
                      width: "100%"
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                style={{
                  width: "100%"
                }}
              >
                <Grid
                  item
                  style={{
                    width: "10%",
                    fontSize: "2em"
                  }}
                >
                  <Lock />
                </Grid>
                <Grid
                  item
                  style={{
                    width: "90%"
                  }}
                >
                  <TextField
                    id="input-with-icon-grid"
                    label="Password"
                    type={this.state.showPassword ? "text" : "password"}
                    className={classes.TextF}
                    style={{
                      width: "100%"
                    }}
                    onChange={this.handleChange("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment variant="filled" position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              {this.props.error !== null ? (
                <Grid
                  container
                  spacing={8}
                  alignItems="flex-end"
                  style={{ marginTop: "10px" }}
                >
                  <Typography variant="h7">{this.props.error}</Typography>
                </Grid>
              ) : null}
              <Grid container spacing={8} alignItems="flex-end">
                <Button
                  label="Submit"
                  variant="contained"
                  color="primary"
                  onClick={this.submitHandler}
                  style={{
                    height: "50px",
                    width: "100%",
                    marginTop: "20px",
                    fontSize: "1em",
                    alignContent: "center"
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    token: state.authReducer.token,
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps)(Auth);
