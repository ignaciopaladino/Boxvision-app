import {
  RECEIVE_ORDERS,
  REQUEST_ORDERS,
  RECEIVE_ORDER,
  REQUEST_ORDER,
  RECEIVE_ORDER_GRADUACION,
  SELECT_ORDER
} from "../actions/orders";

const ordersReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ORDERS:
      return (state = { ...state, isFetching: true });
      break;
    case RECEIVE_ORDERS:
      return (state = {
        ...state,
        isFetching: false,
        orders: action.orders,
        lastUpdate: action.receivedAt
      });
      break;

    case REQUEST_ORDER:
      return (state = {
        ...state,
        selectedOrder: action.payload,
        isFetching: true
      });
      break;
    case RECEIVE_ORDER:
      return (state = {
        ...state,
        isFetching: false,
        selectedOrderProducts: action.selectedOrderProducts,
        lastUpdate: action.receivedAt
      });
      break;
    case RECEIVE_ORDER_GRADUACION:
      return (state = {
        ...state,
        isFetching: false,
        selectedOrderGraduacion: action.selectedOrderGraduacion,
        lastUpdate: action.receivedAt
      });
      break;

    default:
      return state;
  }
};

export default ordersReducer;
