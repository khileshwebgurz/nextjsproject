import React from "react";
import Link from "next/link";
import Image from "next/image";
const SectionTwoCard = ({ txt, icon }) => {
  return (
    <>
      <div className="small-card">
        <Image src={icon} alt="icon" height={50} width={50} />
        <Link href="" />
        <p>{txt}</p>
      </div>
    </>
  );
};

export default SectionTwoCard;
