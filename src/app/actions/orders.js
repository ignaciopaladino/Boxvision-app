import Axios from "axios";

export const REQUEST_ORDERS = "REQUEST_ORDERS";

export function requestOrders(filter) {
  return {
    type: REQUEST_ORDERS,
    payload: filter
  };
}

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";

function receiveOrders(json) {
  return {
    type: RECEIVE_ORDERS,
    orders: json.data,
    receivedAt: Date.now()
  };
}

export function fetchOrders() {
  return function(dispatch) {
    dispatch(requestOrders());
    return fetch("https://boxvision.com.ar/boxvision/tablets/pedido/")
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveOrders(json)));
  };
}

export const REQUEST_ORDER = "REQUEST_ORDER";

export function requestOrder(data) {
  return {
    type: REQUEST_ORDER,
    payload: data
  };
}

export const RECEIVE_ORDER = "RECEIVE_ORDER";

function receiveOrder(json) {
  return {
    type: RECEIVE_ORDER,
    selectedOrderProducts: json.data,
    receivedAt: Date.now()
  };
}

export const SELECT_ORDER = "SELECT_ORDER";

export function selectOrder(data) {
  return function(dispatch) {
    dispatch(requestOrder(data));

    return fetch("https://boxvision.com.ar/boxvision/tablets/pedido/" + data.idPedido)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveOrder(json)));
  };
}

export const RECEIVE_ORDER_GRADUACION = "RECEIVE_ORDER_GRADUACION";

function receiveOrderGraduacion(json) {
  return {
    type: RECEIVE_ORDER_GRADUACION,
    selectedOrderGraduacion: json.data,
    receivedAt: Date.now()
  };
}

export const SELECT_ORDER_GRADUACION = "SELECT_ORDER_GRADUACION";

export function selectOrderGraduacion(data) {
  return function(dispatch) {
    return fetch(
      "https://boxvision.com.ar/boxvision/tablets/graduacion/" + data.idPedido
    )
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveOrderGraduacion(json)));
  };
}

export function procesarOrder(values) {
  return function(dispatch) {
    return Axios.post("https://boxvision.com.ar/boxvision/tablets/pedido/procesar", {
      values: values
    })
      .then(json => dispatch(fetchOrders()))
      .then(json => dispatch(selectOrder(values)));
  };
}

export function cerrarOrder(values) {
  return function(dispatch) {
    return Axios.post("https://boxvision.com.ar/boxvision/tablets/pedido/cerrar", {
      values: values
    })
      .then(json => dispatch(fetchOrders()))
      .then(json => dispatch(selectOrder(values)));
  };
}

export function borrarOrder(values) {
  return function(dispatch) {
    return Axios.post("https://boxvision.com.ar/boxvision/tablets/pedido/borrar", {
      values: values
    })
      .then(json => dispatch(fetchOrders()))
      .then(json => dispatch(selectOrder(values)));
  };
}

export function paymentOrder(values, parcial, total) {
  return function(dispatch) {
    return Axios.post("https://boxvision.com.ar/boxvision/tablets/pedido/pago", {
      values: values,
      parcial: parcial,
      total: total
    })
      .then(json => dispatch(fetchOrders()))
      .then(json => dispatch(selectOrder(values)));
  };
}
