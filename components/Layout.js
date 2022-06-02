import React from "react";
import Head from "next/head";

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>NV Headphone Shop</title>
      </Head>
      <header></header>
      <main className="main-container">{Children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
