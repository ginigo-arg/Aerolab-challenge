import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import LayoutProducts from "../components/layouts/layoutProducts";
import ProductList from "../components/products/product-list";
import SectionFilters from "../components/products/SectionFilters";
import Slide from "../components/slide";
import { Products, User } from "../components/types";
import { filterContext, useFilters } from "../context/filterContext";
import { getAllProducts, getUser, postCoins } from "./api/api";

type Props = {
  products: Products[];
  user: User;
};

const Home: NextPage<Props> = ({ products, user }) => {
  const { getAllProducts, getUser } = useContext(filterContext);
  useEffect(() => {
    getAllProducts(products);
    getUser(user);
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
  const products = await getAllProducts();
  const user = await getUser();
  return { props: { products, user } };
};
