
import React from "react";
import banner from "../../../public/Images/bannerImg.webp";
import logo from "../../../public/Images/logo.png";
import Image from "next/image.js";

const SectionOne = () => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <Image src={banner} height={378.39} alt="img" width={1857} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={logo}
            height={100}
            alt="logo"
            width={150}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Top Blogs By Our Experts
          </h1>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
