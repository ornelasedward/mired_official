import Head from "next/head";
import Bubbles from "../components/Bubbles";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Footers from "../components/Footers";
import Portfolio from "../components/Portfolio";
import Icons from "../components/Icons";
import Qoute from "../components/Qoute";
import ServicesExplained from "../components/ServicesExplained";
import About from "../components/About";
import Whyus from "../components/Whyus";
import Parallax from "../components/Parallax";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mired</title>
        <meta name="description" content="Created by Edward Ornelas" />
        <link rel="icon" href="/favicon.ico" />

        <script defer type="text/javascript" src="/static/script.js"></script>

        <script defer type="text/javascript" src="/static/script2.js"></script>
      </Head>
      <Bubbles />
      <Hero />
      <Icons />
      <About />
      <Whyus />
      <Services />
      <Qoute />
      <Parallax />
      <ServicesExplained />
      <Portfolio />
      <Info />
      <Contact />
      <Footers />
    </div>
  );
}
