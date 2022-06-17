import { Products, User } from "../../components/types";

const method = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: process.env.API_TOKEN,
  },
};
export const getAllProducts = async (): Promise<Products[] | false> => {
  const products = await fetch(process.env.API_URL_PRODUCTS, method)
    .then((res) => res.json())
    .catch(() => console.log("Error al obtener los productos"));
  return products;
};

export const getUser = async (): Promise<User | null> => {
  const user = await fetch(process.env.API_URL_USER, method)
    .then((res) => res.json())
    .catch(() => console.log("Error al obtener el usuario"));

  return user;
};
