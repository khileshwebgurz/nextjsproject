import React from "react";
import SectionTwoCard from './SectionTwoCard'
import icon1 from "../../../public/Images/icon1.webp";
import icon2 from "../../../public/Images/icon2.png";
const SectionTwo = () => {
  return (
    <>
      <h2>Most Popular Categories</h2>
      <SectionTwoCard txt="Web Design" icon={icon1}/>
      <SectionTwoCard txt="Magento" icon={icon2}/>
      <SectionTwoCard txt="Online Reputation Management" icon={icon2}/>
      <SectionTwoCard txt="Internet Marketing" icon={icon2}/>
      <SectionTwoCard txt="Google Marketing" icon={icon2}/>
      <SectionTwoCard txt="Facebook Marketing" icon={icon2}/>
      <SectionTwoCard txt="Ecommerce" icon={icon2}/>
      <SectionTwoCard txt="Blog" icon={icon2}/>
    </>
  );
};

export default SectionTwo;
