import React, { Component } from "react";
import { connect } from "react-redux";

import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import store from "../../store";
import {
  requestOrders,
  fetchOrders,
  selectOrder,
  selectOrderGraduacion
} from "../actions/orders";
import Order from "../containers/Order";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [{}],
      currentOrder: 0,
      selectedRows: 0
    };
  }

  componentDidMount() {
    store.dispatch(fetchOrders()).then(() => this.fillOrdersList());
    // store.dispatch(fetchTipoLentes()).then(() => this.fillTipoLentes());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.orders);
    if (prevProps.orders !== this.props.orders) {
      this.props.orders.forEach(order => {
        order.fechaIngreso = order.fechaIngreso.split('T').join(' ').split('.')[0]
      });
      this.setState({
        rowData: this.props.orders
      });
    }
  }

  fillOrdersList() {
    this.setState({ rowData: store.getState().ordersReducer.orders });
  }

  onRowSelected = event => {
    console.log(event);
    if (event.node.selected) {
      store.dispatch(selectOrder(event.data));
      store.dispatch(selectOrderGraduacion(event.data));
    }
  };

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions = params.options;
  }

  render() {
    return (
      <React.Fragment>
        <div className="ag-theme-balham orders-table">
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

            <AgGridColumn headerName="IdPedido" field="idPedido" width={50} />
            <AgGridColumn headerName="fecha" field="fechaIngreso" width={100} />
            <AgGridColumn
              headerName="N Afiliado"
              field="numeroAfiliado"
              width={100}
            />
            <AgGridColumn
              headerName="N Voucher"
              field="numeroVoucher"
              width={100}
            />

            <AgGridColumn headerName="Nombre" field="nombre" width={100} />

            <AgGridColumn headerName="Apellido" field="apellido" width={100} />
            <AgGridColumn headerName="Total" field="total" width={100} />
            <AgGridColumn headerName="Estado" field="estado" width={100} />

            {/*<AgGridColumn headerName="Información adicional" field="info" width={100} />*/}
            <AgGridColumn headerName="Sede" field="sede" width={100} />

            <AgGridColumn headerName="Id Pago MP" field="mp_payment_id" width={100} />

            <AgGridColumn headerName="URL Receta" field="urlReceta" width={100} />
            

          </AgGridReact>
        </div>
        <br />
        <div>
          <Order />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.ordersReducer.orders
  };
};

export default connect(mapStateToProps)(Orders);
