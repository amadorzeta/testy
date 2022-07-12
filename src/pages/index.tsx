import type { NextPage } from "next";
import Head from "next/head";

const Component = () => {
  return (
    <>
      <nav>
        <h1>Testy first attempt</h1>
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
      </nav>
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
