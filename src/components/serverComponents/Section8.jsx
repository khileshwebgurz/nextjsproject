import React from "react";
import india from "../../../public/Images/india.webp";
import australia from "../../../public/Images/australia.webp";
import indiaflag from "../../../public/Images/Indiaflag.webp";
import usa from "../../../public/Images/usa.webp";
import uk from "../../../public/Images/uk.webp";
import Image from "next/image";
const Section8 = () => {
  return (
    <>
      <h4>Contact us</h4>
      <h2>
        Let's Fire up your Business
        <br />
        Team us with us Today for an unforgettable Service experience
      </h2>
      <Image src={india} height={300} width={200} alt="india" />
      <div className="leftSideOfImg">
        <Image src={indiaflag} height={30} width={30} alt="indianflag" />
        <h3>India</h3>
        <Image src={australia} height={30} width={30} alt="australia" />
        <h3>Australia</h3>
        <Image src={usa} height={30} width={30} alt="usa" />
        <h3>USA</h3>
        <Image src={uk} height={30} width={30} alt="uk" />
        <h3>UK</h3>
      </div>
      <div className="rightSideOfImg">
        <h1>India</h1>
        <h4>4th Floor, SM Heights, C-205, Phase 8 B, Sector 74 Mohali</h4>
        <h5> +91-7087233361
        provider@webguruz.in</h5>
        <h4>Contact(Job)</h4>
        <h5> +91-9592016444
        careers@webguruz.in</h5>
      </div>
    </>
  );
};

export default Section8;
