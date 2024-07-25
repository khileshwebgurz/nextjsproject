import React from "react";
import banner from "../../../public/Images/banner1.webp";
import person from "../../../public/Images/person.gif";
import envelope from "../../../public/Images/envelope.png";
import Image from "next/image";

const SectionFive = () => {
  return (
    <>
      <div className="main" style={{ position: "relative" }}>
        <div
          className="firstImg"
          style={{ position: "absolute", marginLeft: "300px" }}
        >
          <Image src={banner} alt="banner" height={500} width={1200} />
        </div>
        <div
          className="secondImg"
          style={{ position: "absolute", left: "280px", top: "130px" }}
        >
          <Image src={person} alt="gif" height={300} width={350} />
        </div>
        <div
          className="thirdImg"
          style={{ position: "absolute", left: "800px", top: "70px" }}
        >
          <Image src={envelope} alt="envelope" height={50} width={50} />
          <p>Join 25000+ Subscribers</p>
          <h3>Stay updated with<br/>
          Latest Insights.</h3>
          <p>Latest Mobile App Development and Online Marketing News, Insights,Trends delivered weekly to your Inbox.</p>
          <input type="text" value="Enter Email" name="Subsribe" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
