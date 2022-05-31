import React, { Component } from "react";
import { connect } from "react-redux";

import Products from "../containers/Products";

import Orders from "../containers/Orders";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTipoProduct: "lentes"
    };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedTipoProduct !== this.props.selectedTipoProduct) {
      this.setState({ selectTipoProduct: this.props.selectedTipoProduct });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.selectTipoProduct == "ordenes" ? <Orders /> : <Products />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTipoProduct: state.productReducer.selectedTipoProduct
  };
};

export default connect(mapStateToProps)(MainContainer);
