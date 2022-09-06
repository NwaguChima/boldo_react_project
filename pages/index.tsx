import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";
import OurServices from "../components/ourServices/OurServices";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boldo-Homepage</title>
        <meta
          name="description"
          content="Boldo helps you build fast templates"
        />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>
      <Header />
      <main>
        <OurServices />
      </main>
    </div>
  );
};

export default Home;
