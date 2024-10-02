const initialState = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        cartData: [...state.cartData, action.payload],
      };
      break;
    case "REMOVE_FROM_CARD":
      return {
        ...state,
        cartData: state.cartData.flter((item) => item.id !== action.payload.id),
      };
      break;
    default:
      return state;
  }
};

export { cartReducer, initialState };
