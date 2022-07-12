import type { NextPage } from "next";
import Head from "next/head";

const Component = () => {
  return (
    <>
      <h1>Hi there</h1>
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Testy</title>
      </Head>
      <Component />
    </>
  );
};

export default Home;
