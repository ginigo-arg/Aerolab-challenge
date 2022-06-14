import { Products } from "../../components/types";

const method = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: process.env.API_TOKEN,
  },
};

export default {
  getAllProducts: async (): Promise<Products[] | false> => {
    return fetch(process.env.API_URL_PRODUCTS, method)
      .then((res) => res.json())
      .catch((error) => console.log(error));
  },
};
