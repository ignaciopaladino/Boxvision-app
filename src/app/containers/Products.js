import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import { makeStyles } from "@material-ui/styles";

import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import store from "../../store";
import {
  fetchProducts,
  fetchTipoLentes,
  saveProduct,
  deleteProduct,
  CHANGE_TIPOPRODUCT
} from "../actions/product";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { relative } from "path";

const styles = {
  paper: {
    position: "absolute",
    width: "600px",
    marginLeft: "30%",
    marginTop: "3%",
    outline: "none"
  },
  buttonForm: {
    height: "60px",
    width: "200px"
  }
};

const tipos = [
  { label: "Marco", value: "marco" },
  { label: "Lente", value: "lente" },
  { label: "Antireflejo", value: "antireflejo" },
  { label: "Fotocromático", value: "fotocromatico" }
];

/*const graduaciones = [
  { label: "Esf +/-4,00 cil +/-2,00", value: "1" },
  { label: "Esf+/-4,25 al +/-8,00, Cil+/-2,25 al +/- 4,00", value: "2" },
  { label: "Esf+/-8,25 al +/- 12, Cil +/- 4,25 al +/-6,00", value: "3" }
];*/

const graduaciones = [
  { label: "Baja y Baja", value: "1" },
  { label: "Mediana y Mediana", value: "2" },
  { label: "Alta y Alta", value: "3" },
  { label: "Baja y Media", value: "4" },
  { label: "Baja y Alta", value: "5" },
  { label: "Media y Alta", value: "6" }  
];

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [{}],
      currentProduct: { tipo: "marco", graduacion: 1 },
      selectedRows: 0,
      tipoLentes: [
        {
          value: 0,
          label: ""
        }
      ]
    };
  }
  componentDidMount() {
    store.dispatch(fetchProducts()).then(() => this.fillProductList());
    store.dispatch(fetchTipoLentes()).then(() => this.fillTipoLentes());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedTipoProduct !== this.props.selectedTipoProduct) {
      this.changeProductType();
    }
  }

  changeProductType = () => {
    if (this.props.selectedTipoProduct === "lente") {
      this.lenteSelected();
    }
    if (this.props.selectedTipoProduct === "marco") {
      this.marcoSelected();
    }
    if (this.props.selectedTipoProduct === "antireflejo") {
      this.antireflejoSelected();
    }

    if (this.props.selectedTipoProduct === "fotocromatico") {
      this.fotocromaticoSelected();
    }
  };

  lenteSelected() {
    this.gridColumnApi.setColumnsVisible(["tipo"], false);
    this.gridColumnApi.setColumnsVisible(["graduaciondesc"], true);
    this.gridColumnApi.setColumnsVisible(["tipolente"], false);
    this.gridColumnApi.setColumnsVisible(["nombre"], true);
    this.gridColumnApi.setColumnsVisible(["label"], false);
    this.gridColumnApi.setColumnsVisible(["imgUrl"], false);
    //this.gridColumnApi.setColumnsVisible(["descripcion"], false);    
    this.gridColumnApi.setColumnsVisible(["instagramLink"], false);  
    this.gridColumnApi.setColumnsVisible(["color"], false);   

    var tipoFilterComponent = this.gridApi.gridOptionsWrapper.gridOptions.api.getFilterInstance(
      "tipo"
    );
    tipoFilterComponent.setModel({
      type: "equals",
      filter: "lente"
    });
    this.gridApi.gridOptionsWrapper.gridOptions.api.onFilterChanged();
  }

  marcoSelected() {
    this.gridColumnApi.setColumnsVisible(["tipo"], false);
    this.gridColumnApi.setColumnsVisible(["graduaciondesc"], false);
    this.gridColumnApi.setColumnsVisible(["tipolente"], false);
    this.gridColumnApi.setColumnsVisible(["nombre"], false);
    this.gridColumnApi.setColumnsVisible(["label"], true);
    this.gridColumnApi.setColumnsVisible(["imgUrl"], true);
    //this.gridColumnApi.setColumnsVisible(["descripcion"], true);
    this.gridColumnApi.setColumnsVisible(["instagramLink"], true);  
    this.gridColumnApi.setColumnsVisible(["color"], true);  

    var tipoFilterComponent = this.gridApi.gridOptionsWrapper.gridOptions.api.getFilterInstance(
      "tipo"
    );
    tipoFilterComponent.setModel({
      type: "equals",
      filter: "marco"
    });
    this.gridApi.gridOptionsWrapper.gridOptions.api.onFilterChanged();
  }

  antireflejoSelected() {
    this.gridColumnApi.setColumnsVisible(["tipo"], false);
    this.gridColumnApi.setColumnsVisible(["tipolente"], true);
    this.gridColumnApi.setColumnsVisible(["graduaciondesc"], false);
    this.gridColumnApi.setColumnsVisible(["label"], false);
    this.gridColumnApi.setColumnsVisible(["nombre"], true);
    this.gridColumnApi.setColumnsVisible(["imgUrl"], false);
    //this.gridColumnApi.setColumnsVisible(["descripcion"], false);
    this.gridColumnApi.setColumnsVisible(["instagramLink"], false);  
    this.gridColumnApi.setColumnsVisible(["color"], false);  

    var tipoFilterComponent = this.gridApi.gridOptionsWrapper.gridOptions.api.getFilterInstance(
      "tipo"
    );
    tipoFilterComponent.setModel({
      type: "equals",
      filter: "antireflejo"
    });

    this.gridApi.gridOptionsWrapper.gridOptions.api.onFilterChanged();
  }
  fotocromaticoSelected() {
    this.gridColumnApi.setColumnsVisible(["tipo"], false);
    this.gridColumnApi.setColumnsVisible(["tipolente"], true);
    this.gridColumnApi.setColumnsVisible(["graduaciondesc"], false);
    this.gridColumnApi.setColumnsVisible(["nombre"], true);
    this.gridColumnApi.setColumnsVisible(["label"], false);
    this.gridColumnApi.setColumnsVisible(["imgUrl"], false);
    //this.gridColumnApi.setColumnsVisible(["descripcion"], false);
    this.gridColumnApi.setColumnsVisible(["instagramLink"], false);  
    this.gridColumnApi.setColumnsVisible(["color"], false);  

    var tipoFilterComponent = this.gridApi.gridOptionsWrapper.gridOptions.api.getFilterInstance(
      "tipo"
    );
    tipoFilterComponent.setModel({
      type: "equals",
      filter: "fotocromatico"
    });

    this.gridApi.gridOptionsWrapper.gridOptions.api.onFilterChanged();
  }

  fillProductList() {
    this.setState({ rowData: store.getState().productReducer.products });
    this.lenteSelected();
  }

  fillTipoLentes() {
    this.setState({ tipoLentes: store.getState().productReducer.tipoLentes });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions = params.options;
    this.lenteSelected();
  }

  handleOpenNew = () => {
    this.setState({
      addOpen: true,
      currentProduct: {
        id: 0,
        nombre: "",
        precio: "",
        tipo: "marco",
        graduacion: 1,
        idTipoLente: 0,
        descripcion: "",
        imgUrl: null,
        instagramLink: "",
        selectedFile: null,
        color: ""
      }
    });
  };

  handleChange2 = name => event => {
    // Update the state
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
    const formData = new FormData();
    formData.append(
      "file",
      event.target.files[0],
      event.target.files[0].name
    ); 
    //console.log(formData);    
    Axios.post("https://boxvision.com.ar/tablets/recetas/", formData)
    .then(json => { 
        this.setState({ 
          currentProduct: { 
            ...this.state.currentProduct,
            imgUrl : json.data[0].url.replace(/ /g,"%20") 
          } 
        })
        console.log(json.data)
    });  
    /*this.setState({
      currentProduct: {
        ...this.state.currentProduct,
        [name]: 'https://boxvision.com.ar/tablets/recetas/'+event.target.files[0].name.replace(/ /g,"%20")
      }
    });   */ 
  };

  onFileChange = event => {    
    // Update the state
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
    const formData = new FormData();
    formData.append(
      "file",
      event.target.files[0],
      event.target.files[0].name
    ); 
    //console.log(formData);    
    Axios.post("https://boxvision.com.ar/tablets/recetas/", formData)
    .then(json => { 
      this.setState({
        currentProduct: {
          ...this.state.currentProduct,
          imgUrl: json.data[0].url.replace(/ /g,"%20")
        }
      });    
      //this.setState({ imgUrl: json.data[0].url.replace(/ /g,"%20") });
      console.log(this.state.currentProduct.imgUrl)
      //console.log(json.data[0].url.replace(/ /g,"%20"));
      //this.saveDone();
    });
  };

  handleSave = () => {
    this.setState({ loading: true });
    store
      .dispatch(saveProduct(this.state.currentProduct))
      .then(() => this.saveDone());
  };

  handleDelete = () => {
    this.setState({ deleteDialog: true });
  };

  handleDeleteConfirm = () => {
    store.dispatch(deleteProduct(this.state.currentProduct)).then(() => {
      store.dispatch(fetchProducts()).then(() => this.fillProductList());
      this.setState({ deleteDialog: false });
    });
  };

  saveDone = () => {
    console.log(this.state.currentProduct.imgUrl);
    this.setState({ loading: false });
    this.handleClose();
    store.dispatch(fetchProducts()).then(() => {
      this.fillProductList();
      this.changeProductType();
    });
  };

  handleClose = () => {
    this.setState({ addOpen: false, deleteDialog: false });
  };

  handleChange = name => event => {
    this.setState({
      currentProduct: {
        ...this.state.currentProduct,
        [name]: event.target.value
      }
    });
  };

  onRowSelected = event => {
    console.log(event);
    if (event.node.selected) this.setState({ currentProduct: event.data });
  };

  onSelectionChanged = event => {
    console.log(event.api.getSelectedNodes().length);

    this.setState({ selectedRows: event.api.getSelectedNodes().length });
  };

  handleEdit = () => {
    this.setState({ addOpen: true });
  };

  Transition = props => {
    return <Slide direction="up" {...props} />;
  };

  render() {
    return (
      <React.Fragment>
        <div className="ag-theme-balham productos-table">
          <AgGridReact
            enableSorting={true}
            enableFilter={true}
            enableColResize={true}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady.bind(this)}
            rowSelection="single"
            onRowSelected={this.onRowSelected}
            onSelectionChanged={this.onSelectionChanged}
          >
            <AgGridColumn
              headerName="#"
              width={40}
              checkboxSelection
              suppressSorting
              suppressMenu
              suppressFilter
              pinned
            />

            <AgGridColumn headerName="Nombre" field="nombre" width={250} />
            <AgGridColumn headerName="Nombre" field="label" width={250} />

            <AgGridColumn headerName="Precio" field="precio" width={120} />

            {/*<AgGridColumn headerName="Descripcion" field="descripcion" width={120} />*/}

            <AgGridColumn headerName="Color" field="color" width={120} />

            <AgGridColumn headerName="Image" field="imgUrl" width={120} />
            <AgGridColumn headerName="Instagram Link" field="instagramLink" width={120} />

            
            
            <AgGridColumn
              headerName="Tipo"
              field="tipo"
              width={100}
              hide={true}
            />

            <AgGridColumn
              headerName="Graduación"
              field="graduaciondesc"
              width={250}
            />
            <AgGridColumn
              headerName="Tipo Lente"
              field="tipolente"
              width={200}
            />
          </AgGridReact>
          <div
            style={{
              position: relative,
              marginTop: "-75px",
              float: "right"
            }}
          >
            <Fab
              aria-label="Delete"
              onClick={this.handleDelete}
              style={{ margin: "10px" }}
              disabled={this.state.selectedRows === 0}
            >
              <DeleteIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="Edit"
              style={{ margin: "5px" }}
              onClick={this.handleEdit}
              disabled={this.state.selectedRows === 0}
            >
              <CreateIcon />
            </Fab>

            <Fab
              color="primary"
              onClick={this.handleOpenNew}
              aria-label="Add"
              style={{ margin: "10px" }}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.addOpen}
          onClose={this.handleClose}
        >
          <Paper style={styles.paper}>
            <div style={{ margin: "50px" }}>
              <Typography variant="h4" id="modal-title">
                Nuevo Producto
              </Typography>
              <form noValidate autoComplete="off">
                {this.state.currentProduct.tipo === "marco" ? (
                  <TextField
                    id="standard-name"
                    label="Nombre"
                    value={this.state.currentProduct.label}
                    onChange={this.handleChange("label")}
                    margin="normal"
                    className="textFieldStyle"
                  />
                ) : (
                  <TextField
                    id="standard-name"
                    label="Nombre"
                    value={this.state.currentProduct.nombre}
                    onChange={this.handleChange("nombre")}
                    margin="normal"
                    className="textFieldStyle"
                  />
                )}

                <br />
                <TextField
                  id="standard-precio"
                  label="Precio"
                  type="number"
                  value={this.state.currentProduct.precio}
                  onChange={this.handleChange("precio")}
                  margin="normal"
                  className="textFieldStyle"
                />

                {/*this.props.selectedTipoProduct === "marco" ? (
                  <TextField
                    id="standard-descripcion"
                    label="Descripcion"
                    value={this.state.currentProduct.descripcion}
                    onChange={this.handleChange("descripcion")}
                    margin="normal"
                    className="textFieldStyle"
                  />
                ) : null */}

                {this.props.selectedTipoProduct === "marco" ? (
                  <TextField
                    id="standard-color"
                    label="Color"
                    value={this.state.currentProduct.color}
                    onChange={this.handleChange("color")}
                    margin="normal"
                    className="textFieldStyle"
                  />
                ) : null }

                {this.props.selectedTipoProduct === "marco" ? (
                  <TextField
                    id="standard-imageUrl"
                    label="Imagen"
                    onChange={this.handleChange2("imgUrl")}
                    margin="normal"
                    className="textFieldStyle"
                    type="file"
                  />
                ) : null }  

                {this.props.selectedTipoProduct === "marco" && this.state.currentProduct.imgUrl !== null ? (
                  <img
                    src={this.state.currentProduct.imgUrl}
                    onClick={() => { window.open(this.state.currentProduct.imgUrl, '_blank') }}
                    margin="normal"
                    style={{width:'15%',cursor:'pointer'}}
                  />
                ) : null}  

                {this.props.selectedTipoProduct === "marco" ? (
                  <TextField
                    id="standard-instagramLink"
                    label="Instagram Link"
                    value={this.state.currentProduct.instagramLink}
                    onChange={this.handleChange('instagramLink')}
                    margin="normal"
                    className="textFieldStyle"
                  />
                ) : null }  

                <br />
                <TextField
                  id="standard-select-currency"
                  select
                  label="Select"
                  value={this.state.currentProduct.tipo}
                  onChange={this.handleChange("tipo")}
                  helperText="Seleccionar Tipo"
                  margin="normal"
                  className="textFieldStyle"
                >
                  {tipos.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label == 'Marco' ? 'Armazón' : option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <br />
                {this.state.currentProduct.tipo === "lente" ? (
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={this.state.currentProduct.rangograduacion}
                    onChange={this.handleChange("rangograduacion")}
                    helperText="Seleccionar Graduacion"
                    margin="normal"
                    className="textFieldStyle"
                  >
                    {graduaciones.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : null}
                <br />
                {this.state.currentProduct.tipo === "antireflejo" ||
                this.state.currentProduct.tipo === "fotocromatico" ? (
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={this.state.currentProduct.idTipoLente}
                    onChange={this.handleChange("idTipoLente")}
                    helperText="Seleccionar Tipo de Lente"
                    margin="normal"
                    className="textFieldStyle"
                  >
                    {this.state.tipoLentes.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : null}
              </form>
              <br /> <br />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSave}
                  style={{ width: "150px", height: "50px" }}
                >
                  Guardar
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClose}
                  style={{ width: "150px", height: "50px" }}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </Paper>
        </Modal>  

        <Dialog
          open={this.state.deleteDialog}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"SEGURO DESEA BORRAR?"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={this.handleDeleteConfirm} color="primary">
              CONFIRMAR
            </Button>
            <Button onClick={this.handleClose} color="primary">
              CANCELAR
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedTipoProduct: state.productReducer.selectedTipoProduct
  };
};

export default connect(mapStateToProps)(Products);
