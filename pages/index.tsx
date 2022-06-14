import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LayoutProducts from "../components/layouts/layoutProducts";
import ProductList from "../components/products/product-list";
import SectionFilters from "../components/products/SectionFilters";
import Slide from "../components/slide";
import { Products } from "../components/types";
import Api from "./api/api";

type Props = {
  products: Products;
};

const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Slide />

      <LayoutProducts>
        <SectionFilters />
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
