import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Aerolab App</title>
      </Head>
      <div className="flex flex-col mx-auto border border-gray-100">
        <header>
          <NavBar user="John Kite" />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
