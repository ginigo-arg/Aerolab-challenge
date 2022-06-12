import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutProducts from "../components/layouts/layoutProducts";
import ProductList from "../components/list/product-list";
import Slide from "../components/slide";
import { Products } from "../components/types";
import Api from "./api/api";

export interface Image {
  url: number;
  hdUrl: number;
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
  const products = await Api.getAllProducts();
  return { props: { products } };
};
