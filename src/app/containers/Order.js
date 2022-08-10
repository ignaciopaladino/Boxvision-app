import React, { Component } from "react";
import { connect } from "react-redux";

import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Grid from "@material-ui/core/Grid";
import { procesarOrder, cerrarOrder, borrarOrder, paymentOrder } from "../actions/orders";
import Modal from "@material-ui/core/Modal";

import store from "../../store";

const styles = {
  paper: {
    position: "absolute",
    width: "500px",
    marginLeft: "30%",
    marginTop: "10%",
    outline: "none"
  },
  buttonForm: {
    height: "60px",
    width: "200px"
  }
};

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPayment: false,
      rowData: [{}],
      rowDataGraduacion: [{}],
      currentOrder: 0,
      selectedRows: 0,
      pagoParcialModal: 0,
      pagoTotalModal: 0,
      selectedOrder: {
        nombre: "",
        apellido: "",
        numeroAfiliado: "",
        numeroVoucher: "",
        direccion: "",
        ciudad: "",
        provincia: "",
        fechaIngreso: "",
        idPedido: "",
        estado: "",
        total: "",
        email: "",
        sede: "",
        info: "",
        mp_payment_id: "",
        pagoParcial: 0,
        pagoTotal: 0,
        urlReceta: ""
      }
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedOrderProducts !== this.props.selectedOrderProducts) {
      //console.log(this.props.selectedOrderProducts)
      this.props.selectedOrderProducts.map(item => {
        if(item.tipo==='marco'){
          item.tipo = 'Armazón';
          item.nombre = item.label;
        } 
      });
      this.setState({
        rowData: this.props.selectedOrderProducts
      });
    }

    if (prevProps.selectedOrder !== this.props.selectedOrder) {
      
      this.setState({
        selectedOrder: this.props.selectedOrder,
        pagoTotalModal: this.props.selectedOrder.pagoTotal,
        pagoParcialModal: this.props.selectedOrder.pagoParcial
      });
    }

    if (
      prevProps.selectedOrderGraduacion !== this.props.selectedOrderGraduacion
    ) {
      this.setState({
        rowDataGraduacion: this.props.selectedOrderGraduacion
      });
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions = params.options;
  }

  handleProcess = () => {
    store.dispatch(procesarOrder(this.state.selectedOrder)).then({});
    this.setState({
      selectedOrder: { ...this.state.selectedOrder, estado: "procesado" }
    });
  };

  handleClose = () => {
    store.dispatch(cerrarOrder(this.state.selectedOrder)).then({});
    this.setState({
      selectedOrder: { ...this.state.selectedOrder, estado: "cerrado" }
    });
  };

  
  handleDelete = () => {
    store.dispatch(borrarOrder(this.state.selectedOrder)).then({});
    this.setState({
      selectedOrder: { ...this.state.selectedOrder, estado: "borrado" }
    });
  };

  handlePayment = () => {
    this.setState({
      addPayment: true
    });
  };

  handleSavePayment = () => {
    store
      .dispatch(
        paymentOrder(
          this.state.selectedOrder,
          this.state.pagoParcialModal,
          this.state.pagoTotalModal
        )
      )
      .then(
        this.setState({
          addPayment: false
        })
      );

    this.setState({
      selectedOrder: {
        ...this.state.selectedOrder,
        pagoParcial: this.state.pagoParcialModal,
        pagoTotal: this.state.pagoTotalModal
      }
    });
  };

  handleChange = name => event => {
    this.setState({
      selectedOrder: {
        ...this.state.selectedOrder,
        [name]: event.target.value
      }
    });
  };

  handleChangeModal = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  toggleCheckbox = event => {
    let newValue =
      this.state.pagoTotalModal === "on" || this.state.pagoTotalModal === true
        ? false
        : true;
    this.setState({
      pagoTotalModal: newValue
    });
  };

  handleClosePayment = () => {
    this.setState({
      addPayment: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <Paper
          style={{
            paddingLeft: "25px",
            paddingRight: "25px",
            marginBottom: "50px"
          }}
        >
          <div style={{ flexGrow: 1, paddingTop: "-20px" }}>
            <Grid container spacing={6}>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Id Orden"
                  value={this.state.selectedOrder.idPedido}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="N Afiliado"
                  value={this.state.selectedOrder.numeroAfiliado}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="N Voucher"
                  value={this.state.selectedOrder.numeroVoucher}
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Nombre"
                  value={this.state.selectedOrder.nombre}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Apellido"
                  value={this.state.selectedOrder.apellido}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Email"
                  value={this.state.selectedOrder.email}
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid container spacing={12}>
              <Grid item xs={4}>
                <TextField
                  id="standard-name"
                  label="Direccion"
                  value={this.state.selectedOrder.direccion}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-name"
                  label="Ciudad"
                  value={this.state.selectedOrder.ciudad}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-name"
                  label="Provincia"
                  value={this.state.selectedOrder.provincia}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="standard-name2"
                  label="Sede"
                  value={this.state.selectedOrder.sede !== null ? this.state.selectedOrder.sede : '-'}
                  margin="normal"
                />
              </Grid>   
              <Grid item xs={4}>
                <TextField
                  id="standard-name"
                  label="Nro pago Mercadopago"
                  value={this.state.selectedOrder.mp_payment_id !== null ? this.state.selectedOrder.mp_payment_id : '-'}
                  margin="normal"
                />
              </Grid> 
              <Grid item xs={4}>
                <TextField
                  id="standard-name"
                  label="Imagen receta"
                  value={this.state.selectedOrder.urlReceta !== "" ? this.state.selectedOrder.urlReceta : '-'}
                  margin="normal"
                  onClick={() => { window.open(this.state.selectedOrder.urlReceta,'_blank') }}
                  style={{cursor: "pointer"}}
                />
              </Grid>               
              {/*<Grid item xs={12}>
                <TextField
                  id="standard-name"
                  label="Información adicional"
                  value={this.state.selectedOrder.info !== null ? this.state.selectedOrder.info : '-'}
                  margin="normal"
                />
              </Grid>*/}                                     
            </Grid>
          </div>
          <Grid container spacing={10}>
            <Grid item xs={2}>
              <Typography>Productos:</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={10}>
              <div className="ag-theme-balham orders-products-table">
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

                  <AgGridColumn headerName="id" field="idProducto" width={50} />
                  <AgGridColumn headerName="Tipo" field="tipo" width={100} />

                  <AgGridColumn
                    headerName="Nombre"
                    field="nombre"
                    width={200}
                  />
                  {/*<AgGridColumn
                    headerName="Nombre-Marco"
                    field="label"
                    width={150}
                  />*/}
                  <AgGridColumn headerName="Color" field="color" width={100} />
                  <AgGridColumn
                    headerName="Precio"
                    field="precioOrden"
                    width={100}
                  />
                </AgGridReact>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={2}>
              <Typography>Graduación:</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={10}>
              <div className="ag-theme-balham orders-graduacion-table">
                <AgGridReact
                  enableSorting={true}
                  enableFilter={true}
                  enableColResize={true}
                  rowData={this.state.rowDataGraduacion}
                  onGridReady={this.onGridReady.bind(this)}
                  rowSelection="single"
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

                  <AgGridColumn headerName="Ojo" field="Ojo" width={100} />
                  <AgGridColumn headerName="Esfera" field="esfera" width={80} />
                  <AgGridColumn
                    headerName="Cilindro"
                    field="cilindro"
                    width={90}
                  />
                  <AgGridColumn headerName="Eje" field="eje" width={80} />
                  <AgGridColumn headerName="Prisma" field="prisma" width={90} />
                  <AgGridColumn headerName="Base" field="base" width={80} />
                  <AgGridColumn
                    headerName="Adición"
                    field="adicion"
                    width={90}
                  />
                </AgGridReact>
              </div>
            </Grid>
          </Grid>

          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={12}>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Fecha Ingreso"
                  value={this.state.selectedOrder.fechaIngreso}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Estado"
                  value={this.state.selectedOrder.estado}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="standard-name"
                  label="Total"
                  value={this.state.selectedOrder.total}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                {this.state.selectedOrder.pagoTotal === 0 ? (
                  <TextField
                    id="standard-name"
                    label="Pago Parcial"
                    value={this.state.selectedOrder.pagoParcial}
                    margin="normal"
                  />
                ) : (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.selectedOrder.pagoTotal}
                        color="primary"
                      />
                    }
                    label="Pago Total"
                    style={{ marginTop: "18px" }}
                  />
                )}
              </Grid>
              {/*<Grid item xs>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handlePayment}
                  type="submit"
                  style={{
                    position: "relative",
                    marginTop: "28px",
                    marginRight: "0px",
                    float: "right"
                  }}
                >
                  Ingresar Pago
                </Button>
              </Grid>*/}
              <Grid item xs>
                {this.state.selectedOrder.estado === "nueva" ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleProcess}
                    type="submit"
                    style={{
                      position: "relative",
                      marginTop: "28px",
                      float: "right"
                    }}
                  >
                    Procesar
                  </Button>
                ) : this.state.selectedOrder.estado === "procesado" ? (
                  <Button
                    variant="contained"
                    onClick={this.handleClose}
                    type="submit"
                    style={{
                      position: "relative",
                      marginTop: "28px",
                      float: "right",
                      backgroundColor: "red"
                    }}
                  >
                    Cerrar
                  </Button>
                ) : null}
              </Grid>
              <Grid item xs>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleDelete}
                  type="submit"
                  style={{
                    position: "relative",
                    marginTop: "28px",
                    marginRight: "0px",
                    float: "right",
                    backgroundColor: "red"
                  }}
                >
                  Borrar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.addPayment}
          onClose={this.handleClosePayment}
        >
          <Paper style={styles.paper}>
            <div style={{ margin: "50px" }}>
              <Typography variant="h4" id="modal-title">
                Ingrese Pago
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-precio"
                  label="Monto"
                  type="number"
                  value={this.state.pagoParcialModal}
                  onChange={this.handleChangeModal("pagoParcialModal")}
                  margin="normal"
                  className="textFieldStyle"
                  style={{ width: "200px" }}
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.pagoTotalModal}
                      onChange={this.toggleCheckbox}
                      color="primary"
                    />
                  }
                  label="Pago Total"
                />
              </form>
              <br /> <br />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSavePayment}
                  style={{ width: "150px", height: "50px" }}
                >
                  Guardar
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClosePayment}
                  style={{ width: "150px", height: "50px" }}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedOrderProducts: state.ordersReducer.selectedOrderProducts,
    selectedOrder: state.ordersReducer.selectedOrder,
    selectedOrderGraduacion: state.ordersReducer.selectedOrderGraduacion
  };
};

export default connect(mapStateToProps)(Order);
