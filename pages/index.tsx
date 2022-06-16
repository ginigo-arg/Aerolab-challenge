import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import LayoutProducts from "../components/layouts/layoutProducts";
import ProductList from "../components/products/product-list";
import SectionFilters from "../components/products/SectionFilters";
import Slide from "../components/slide";
import { Products } from "../components/types";
import { filterContext, useFilters } from "../context/filterContext";
import Api from "./api/api";

type Props = {
  products: Products[];
};

const Home: NextPage<Props> = ({ products }) => {
  const { getAllProducts } = useContext(filterContext);
  useEffect(() => {
    getAllProducts(products);
  }, []);
  return (
    <>
      <Slide />
      <LayoutProducts>
        <SectionFilters products={products} />
        <ProductList />
      </LayoutProducts>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await Api.getAllProducts();
  return { props: { products } };
};
