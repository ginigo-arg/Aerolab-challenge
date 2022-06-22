import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { ProvideFilters } from "../../context/filterContext";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Aerolab App</title>
        <meta name="robots" content="follow, index" />
        <meta content="Desafio Frontend Aerolab" name="description" />
        <meta
          property="og:url"
          content="https://aerolab-challenge-ginigo-arg.vercel.app"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aerolab challenge" />
        <meta property="og:description" content="Desafio Frontend Aerolab" />
        <meta property="og:title" content="Aerolab challenge" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="linkedin:card" content="summary_large_image" />
        <meta name="linkedin:site" content="@gabriel-inigo" />
        <meta name="linkedin:title" content="Challenge frontend Aerolab" />
        <meta
          name="linkedin:description"
          content="Challenge frontend Aerolab"
        />
        <meta name="linkedin:image" content="/images/og-image.png" />
        <link rel="shortcut icon" href="/images/aerolab-logo.svg" />
      </Head>
      <ProvideFilters>
        <div className="flex flex-col mx-auto">
          <header className="sticky top-0 bg-white z-20 shadow-md">
            <NavBar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ProvideFilters>
    </>
  );
}
