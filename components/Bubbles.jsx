import React from "react";
import Image from "next/image";
import Bubble1 from "../assets/bubble1.png";
import Bubble2 from "../assets/bubble2.png";
import Bubble3 from "../assets/bubble3.png";
import Bubble4 from "../assets/bubble1.png";
import Bubble5 from "../assets/bubble3.png";
import Bubble6 from "../assets/bubble1.png";

const Bubbles = () => {
  return (
    <div>
      <Image src={Bubble1} />
      <Image src={Bubble2} />
      <Image src={Bubble3} />
      <Image src={Bubble4} />
      <Image src={Bubble5} />
      <Image src={Bubble6} />
    </div>
  );
};

export default Bubbles;
