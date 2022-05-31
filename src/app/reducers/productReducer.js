import {
  RECEIVE_PRODUCTS,
  RECEIVE_TIPOLENTES,
  REQUEST_PRODUCTS,
  POST_PRODUCT,
  SAVE_RESPONSE_PRODUCT,
  CHANGE_TIPOPRODUCT
} from "../actions/product";

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return (state = { ...state, isFetching: true });
      break;
    case RECEIVE_PRODUCTS:
      return (state = {
        ...state,
        isFetching: false,
        products: action.products,
        lastUpdate: action.receivedAt
      });
      break;
    case RECEIVE_TIPOLENTES:
      return (state = {
        ...state,
        isFetching: false,
        tipoLentes: action.tipoLentes,
        lastUpdate: action.receivedAt
      });
      break;

    case CHANGE_TIPOPRODUCT:
      return (state = {
        ...state,
        selectedTipoProduct: action.payload
      });
      break;

    case POST_PRODUCT:
      return (state = { ...state, isFetching: true });
      break;
    case SAVE_RESPONSE_PRODUCT:
      return (state = {
        ...state,
        isFetching: false,
        response: action.response
      });
    default:
      return state;
  }
};

export default productReducer;
