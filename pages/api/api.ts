import { Products, User, AddCoin } from "../../components/types";

const methodGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
  },
};

export const getAllProducts = async (): Promise<Products[] | false> => {
  console.log("get", process.env.API_URL_POINTS);
  const products = await fetch(process.env.API_URL_PRODUCTS, methodGet)
    .then((res) => res.json())
    .catch(() => console.log("Error al obtener los productos"));
  return products;
};

export const getUser = async (): Promise<User | null> => {
  const user = await fetch(process.env.API_URL_USER, methodGet)
    .then((res) => res.json())
    .catch(() => console.log("Error al obtener el usuario"));

  return user;
};

export const postCoins = async (amount: 1000 | 5000 | 7500) => {
  const method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_TOKEN as string,
    },
    body: JSON.stringify({ amount: amount }),
  };
  const addCoin = await fetch(
    process.env.NEXT_PUBLIC_API_URL_POINTS as string,
    method
  )
    .then((resp) => resp.json())
    .catch(() => console.log("Error al realizar la peticion"));

  return addCoin;
};
