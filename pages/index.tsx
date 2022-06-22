import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import LayoutProducts from "../components/layouts/layoutProducts";
import ProductList from "../components/products/product-list";
import SectionFilters from "../components/products/SectionFilters";
import Slide from "../components/slide";
import { Products, User } from "../components/types";
import { useFilters } from "../context/filterContext";
import { getAllProducts, getUser } from "./api/api";

type Props = {
  products: Products[];
  user: User;
};

const Home: NextPage<Props> = ({ products, user }) => {
  const { getAllProducts, getUser } = useFilters();
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
