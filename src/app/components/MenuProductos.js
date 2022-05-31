import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import store from "../../store";
import { connect } from "react-redux";

import MenuList from "@material-ui/core/MenuList";
import ListItemText from "@material-ui/core/ListItemText";
import { selectTipoProduct } from "../actions/product";
class MenuProductos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTipoProduct: "lente"
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedTipoProduct !== this.props.selectedTipoProduct) {
      this.setState({ selectTipoProduct: this.props.selectedTipoProduct });
    }
  }

  handleProductoSelected = tipo => {
    //this.setState({ addOpen: false, deleteDialog: false });
    store.dispatch(selectTipoProduct(tipo));
    //this.setState({ selectTipoProduct: tipo });
  };

  handleLenteSelected = () => {
    this.handleProductoSelected("lente");
  };

  handleMarcoSelected = () => {
    this.handleProductoSelected("marco");
  };

  handleAntireflejoSelected = () => {
    this.handleProductoSelected("antireflejo");
  };

  handleFotocromaticoSelected = () => {
    this.handleProductoSelected("fotocromatico");
  };

  render() {
    return (
      <React.Fragment>
        <MenuList>
          {this.state.selectTipoProduct === "lente" ? (
            <MenuItem
              divider
              onClick={this.handleLenteSelected}
              style={{ backgroundColor: "lightgray" }}
            >
              <Typography variant="h7">Lentes</Typography>
            </MenuItem>
          ) : (
            <MenuItem divider onClick={this.handleLenteSelected}>
              <Typography variant="h7">Lentes</Typography>
            </MenuItem>
          )}
          {this.state.selectTipoProduct === "marco" ? (
            <MenuItem
              divider
              onClick={this.handleMarcoSelected}
              style={{ backgroundColor: "lightgray" }}
            >
              <Typography variant="h7">Armazón</Typography>
            </MenuItem>
          ) : (
            <MenuItem divider onClick={this.handleMarcoSelected}>
              <Typography variant="h7">Armazón</Typography>
            </MenuItem>
          )}
          {this.state.selectTipoProduct === "antireflejo" ? (
            <MenuItem
              onClick={this.handleAntireflejoSelected}
              style={{ backgroundColor: "lightgray" }}
              divider
            >
              <Typography variant="h7">Antireflejos</Typography>
            </MenuItem>
          ) : (
            <MenuItem onClick={this.handleAntireflejoSelected} divider>
              <Typography variant="h7">Antireflejos</Typography>
            </MenuItem>
          )}
          {this.state.selectTipoProduct === "fotocromatico" ? (
            <MenuItem
              onClick={this.handleFotocromaticoSelected}
              style={{ backgroundColor: "lightgray" }}
            >
              <Typography variant="h7">Fotocromáticos</Typography>
            </MenuItem>
          ) : (
            <MenuItem onClick={this.handleFotocromaticoSelected}>
              <Typography variant="h7">Fotocromáticos</Typography>
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

export default connect(mapStateToProps)(MenuProductos);
