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

const index = () => {
  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
};

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
      <Icons />
      <Services />
      <Qoute />
      <Portfolio />
      <Info />
      <Contact />
      <Footers />
    </div>
  );
}
