import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutProducts from "../components/layouts/layoutProducts";
import ProductList from "../components/list/product-list";
import Slide from "../components/slide";

export interface Image {
  url: number;
  hdUrl: number;
}
export interface Products {
  _id: string;
  name: string;
  cost: number;
  category: string;
  image: Image;
}
interface Props {
  products: Products;
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Slide />
      <LayoutProducts>
        <ProductList products={products} />
      </LayoutProducts>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      "https://coding-challenge-api.aerolab.co/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzYjU0ZmNkMzgzNTAwMjExOTQwNzQiLCJpYXQiOjE2NTQ4OTU5NTF9.FwcmirjGWEcuXIIOOdygvXGeozgFX5MhwA_KyQoQQfI",
        },
      }
    );
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log("error al realizar la peticion");
  }
};
