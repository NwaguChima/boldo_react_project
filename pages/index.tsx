import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boldo-Homepage</title>
        <meta
          name="description"
          content="Boldo helps you build fast templates"
        />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Header />
      <main>Hello Page</main>
    </div>
  );
};

export default Home;
