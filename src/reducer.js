export const initialState = {
  products: [
    { id: 1, title: "Biscuit", qty: 0, price: 2 },
    { id: 2, title: "Maggi", qty: 0, price: 5 },
    { id: 3, title: "ColdCoffee", qty: 0, price: 50 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        products: action.payload.products,
      };
    case "ADD":
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: state.products.length
              ? state.products[state.products.length - 1].id + 1
              : 1,
            title: action.payload.title,
            qty: 0,
            price: action.payload.price,
          },
        ],
      };
    case "INCREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: product.qty - 1 }
            : product
        ),
      };
    case "DELETE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
