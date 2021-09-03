import { GetStaticPropsContext } from "next";
import React from "react";

export const getStaticProps = async (_ctx: GetStaticPropsContext) => {
  return {
    redirect: {
      destination: "https://github.com/42js",
    },
  };
};

const Home = () => <React.Fragment />;

export default Home;
