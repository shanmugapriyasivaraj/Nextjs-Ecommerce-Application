import React from "react";
import { client } from "../lib/client";

const Home = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speakers of many variations</p>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};

export default Home;
