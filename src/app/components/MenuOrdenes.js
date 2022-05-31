import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import store from "../../store";
import { connect } from "react-redux";

import MenuList from "@material-ui/core/MenuList";
import ListItemText from "@material-ui/core/ListItemText";
import { selectTipoProduct } from "../actions/product";
class MenuOrdenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTipoProduct: ""
    };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedTipoProduct !== this.props.selectedTipoProduct) {
      this.setState({ selectTipoProduct: this.props.selectedTipoProduct });
    }
  }

  handleOrdenesSelected = () => {
    store.dispatch(selectTipoProduct("ordenes"));
  };

  render() {
    return (
      <React.Fragment>
        <MenuList>
          {this.state.selectTipoProduct === "ordenes" ? (
            <MenuItem
              onClick={this.handleOrdenesSelected}
              style={{ backgroundColor: "lightgray" }}
            >
              <Typography variant="h7">Ordenes</Typography>
            </MenuItem>
          ) : (
            <MenuItem onClick={this.handleOrdenesSelected}>
              <Typography variant="h7">Ordenes</Typography>
            </MenuItem>
          )}
        </MenuList>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTipoProduct: state.productReducer.selectedTipoProduct
  };
};

export default connect(mapStateToProps)(MenuOrdenes);
