import Head from "next/head";
import Image from "next/image";
import Bubbles from "../components/Bubbles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Footers from "../components/Footers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mired</title>
        <meta name="description" content="Created by Edward Ornelas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bubbles />
      <Hero />
      <Services />
      <Info />
      <Contact />
      <Footers />
    </div>
  );
}
