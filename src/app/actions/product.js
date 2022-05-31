import Axios from "axios";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";

export function requestProducts(filter) {
  return {
    type: REQUEST_PRODUCTS,
    payload: filter
  };
}

export const CHANGE_TIPOPRODUCT = "CHANGE_TIPOPRODUCT";

export function selectedTipoProduct(tipoProducto) {
  return {
    type: CHANGE_TIPOPRODUCT,
    payload: tipoProducto
  };
}

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.data,
    receivedAt: Date.now()
  };
}

export const RECEIVE_TIPOLENTES = "RECEIVE_TIPOLENTES";

function receiveTipoLentes(json) {
  return {
    type: RECEIVE_TIPOLENTES,
    tipoLentes: json.data,
    receivedAt: Date.now()
  };
}
export const POST_PRODUCT = "POST_PRODUCT";

export function postProduct(values) {
  return {
    type: POST_PRODUCT,
    payload: values
  };
}

export const SAVE_RESPONSE_PRODUCT = "SAVE_RESPONSE_PRODUCT";

export function productSaveResponse(json) {
  return {
    type: SAVE_RESPONSE_PRODUCT,
    response: json
  };
}

export function saveProduct(values) {
  console.log(values)
  return function(dispatch) {
    dispatch(postProduct(values));
    if (values.id === 0) {
      return Axios.post("https://boxvision.com.ar/boxvision/tablets/products/", {
        values: values
      })
        .then(
          //response => response.json(),
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log("An error occurred.", error)
        )
        .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          dispatch(productSaveResponse(json))
        );
    } else {
      return Axios.patch(
        "https://boxvision.com.ar/boxvision/tablets/products/" + values.id,
        {
          values: values
        }
      )
        .then(
          //response => response.json(),
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log("An error occurred.", error)
        )
        .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          dispatch(productSaveResponse(json))
        );
    }
  };
}

export function fetchProducts() {
  return function(dispatch) {
    dispatch(requestProducts());
    return fetch("https://boxvision.com.ar/boxvision/tablets/products/")
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log("An error occurred.", error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receiveProducts(json))
      );
  };
}

export function selectTipoProduct(tipoProducto) {
  return function(dispatch) {
    dispatch(selectedTipoProduct(tipoProducto));
  };
}

export function fetchTipoLentes() {
  return function(dispatch) {
    dispatch(requestProducts());
    return fetch("https://boxvision.com.ar/boxvision/tablets/products/tipolentes")
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveTipoLentes(json)));
  };
}

export function deleteProduct(product) {
  return function(dispatch) {
    return Axios.delete(
      "https://boxvision.com.ar/boxvision/tablets/products/" + product.id
    )
      .then(
        //response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log("An error occurred.", error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(productSaveResponse(json))
      );
  };
}
