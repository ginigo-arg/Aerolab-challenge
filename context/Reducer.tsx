export const reducer = (state, action: any): any => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        filteredProducts: action.payload.prod.filter(
          (product) => product.category === action.payload.category
        ),
      };
    case "PRODUCTS_BY_QUERY":
      return {
        ...state,
        filteredProducts: action.payload.produc.filter((product) =>
          product.name
            .toLowerCase()
            .startsWith(action.payload.query.toLowerCase().trim())
        ),
      };

    default:
      return state;
  }
};
