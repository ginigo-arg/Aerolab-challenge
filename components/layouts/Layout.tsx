import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FilterProvide } from "../../context/filterContext";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Aerolab App</title>
      </Head>
      <FilterProvide>
        <div className="flex flex-col mx-auto">
          <header className="sticky top-0 bg-white z-20 shadow-md">
            <NavBar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </FilterProvide>
    </>
  );
}
