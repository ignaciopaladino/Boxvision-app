import React, { Component } from "react";
import { connect } from "react-redux";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import Auth from "./Auth/Auth";
import { authCheckState } from "../actions/auth";

import store from "../../store";
let currentValue = 0;
class Backend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  componentDidMount() {
    store.dispatch(authCheckState());
    this.setState = {
      isAuthenticated: store.getState().authReducer.isAuthenticated
    };
    var unsubscribe = store.subscribe(this.handleChange);
    unsubscribe();
  }

  handleChange = () => {
    let previousValue = currentValue;
    currentValue = store.getState().authReducer.isAuthenticated;
    console.log(
      "Some deep nested property changed from",
      previousValue,
      "to",
      currentValue
    );

    if (previousValue !== currentValue) {
      console.log(
        "Some deep nested property changed from",
        previousValue,
        "to",
        currentValue
      );
    }
  };

  OnLogin = () => {
    /*console.log(store.getState().authReducer.isAuthenticated);
    const isA = store.getState().authReducer.isAuthenticated;
    this.setState({
      isAuthenticated: isA
    });
    console.log(this.state.isAuthenticated);*/
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.isAuthenticated === true ? <Main /> : <Auth />}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    token: state.authReducer.token
  };
};

export default connect(mapStateToProps)(Backend);
