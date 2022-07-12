import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mired</title>
        <meta name="description" content="Created by Edward Ornelas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}
