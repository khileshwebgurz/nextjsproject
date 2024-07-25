import Image from "next/image";
import webguruzlogo from "../../public/Images/footer-images/webguruz-logo.webp";
import React from "react";
import webguruzlocation from "../../public/Images/footer-images/fotter-location.webp";
import webguruzphoneicon from "../../public/Images/footer-images/phone-icon.webp";
import webguruzemailicon from "../../public/Images/footer-images/email-icon.webp";
import indianFlag from "../../public/Images/footer-images/indianflag.svg";
import footerDmca from "../../public/Images/footer-images/dmca_img.webp";
import Link from "next/link";
import Accordian from "./Accordian";
import footerbg from "../../public/Images/footer-images/seo-score-bg-1.webp";

const footerLinks = [
  { href: "/Resources/Blog", text: "Top Blogs By Our Experts" },
  { href: "/#", text: "Webguruz Foundation" },
  { href: "/#", text: "Parichay" },
  { href: "/#", text: "Terms & Conditions" },
  { href: "/#", text: "Privacy & Policy" },
  { href: "/#", text: "Sitemap" },
];

const footerbgstyle = {
  textAlign: "center",
  backgroundImage: `url(${footerbg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  padding: "60px 0px",
};
const Footer = () => {
  return (
    <footer id="webguruz-footer" style={footerbgstyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div id="webgruruz-logo" className="mb-5">
              <Link href={"/"}>
                <Image src={webguruzlogo} alt="Logo" id="webguruz-image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <div id="footer-address">
              <div id="webguruz-addres" className="icon-footer">
                <Image
                  src={webguruzlocation}
                  alt="Location"
                  id="webguruz-location"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/WebGuruz+Technologies+Pvt+Ltd/@30.7070078,76.6849962,17z/data=!4m6!3m5!1s0x390fecf52c807f63:0x6e127f6af8de3a2!8m2!3d30.7070078!4d76.6849962!16s%2Fg%2F1tf7kys0?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                4th Floor, SM Heights, C-205, Phase 8 B, Sector 74 Mohali
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div id="webguruz-phoneNumber">
              <div className="icon-footer">
                <Image
                  src={webguruzphoneicon}
                  alt="Phone"
                  id="webguruz-phone"
                />
              </div>
              <div className="sales-details">
                <Image src={indianFlag} alt="indianFlag" id="indianFlag" />
                <p>
                  <span>Sales</span> - (+91) 730 700 1777
                </p>
              </div>
              <div className="sales-details">
                <Image src={indianFlag} alt="indianFlag" id="indianFlag" />
                <p>
                  <span>Jobs</span> - (+91) 959 201 6444
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div id="webguruz-emailAddress">
              <div className="icon-footer">
                <Image
                  src={webguruzemailicon}
                  alt="Email Address"
                  id="webguruz-emailAddress"
                />
              </div>
              <div className="email-details">
                <span>Sales</span> -{" "}
                <a
                  href="mailto:provider@webguruz.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mailto:provider@webguruz.in
                </a>
                <br />
                <span>Jobs</span> -{" "}
                <a
                  href="mailto:careers@webguruz.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mailto:careers@webguruz.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="footer-menu-links">
              <ul>
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`webguruz footer-${link.text.replace(
                      /\s+/g,
                      ""
                    )}`}
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="webguruz-rating">
              <div className="ratingreviews">
                Rated <span>4.1/5</span> for Webguruz based on <span>239</span>{" "}
                reviews at Google.
                <a
                  href="https://www.google.com/search?hl=en-IN&gl=in&q=WebGuruz+Technologies+Pvt+Ltd,+C-205,+4th+Floor,+SM+Heights,+NH+5,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160071&ludocid=495721374448214946&lsig=AB86z5XoIQ2scbm0MtZqnOIH5MQe#lrd=0x390fecf52c807f63:0x6e127f6af8de3a2,1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Our Reviews on Google
                </a>
              </div>

              <a
                href="https://www.dmca.com/Protection/Status.aspx?ID=2af704c9-ad37-4670-a717-28eb4c89e78b&refurl=https://webguruz.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={footerDmca}
                  alt="Dmca Protected"
                  id="footer-dmcaProtected"
                />
              </a>
            </div>
            <div className="webguruz-footer-elements">
              <div className="webguruz-favicons">
                {/ Add favicons here if needed /}
              </div>
              <div className="webgurz-copyright">
                <h3>Copyright @ 2024 Webguruz Technologies Private Limited.</h3>
              </div>
              <div className="legal-accordion">
                <Accordian title="Statutory legal information">
                  <p>
                    Webguruz is the Registered Name of Webguruz Technologies
                    Pvt. Ltd., a mobile app and web development company having
                    its office in Mohali, Punjab, India at the registered
                    address- C-205, 4th Floor, SM Heights, Sector 74, Mohali,
                    160055.
                  </p>
                  <p>
                    The personal information(Name, Email, Phone and Project
                    Details) that you submit to us through our website will
                    remain confidential. We don't sell, share or rent this
                    information to third-parties unless required by the law
                    enforcement agencies governed by the State Govt. or the
                    Govt. of India. For details, refer to our Privacy Policy.
                  </p>
                  <p>
                    Our team will use this information to send updates to you
                    about our company and projects or contact you if requested
                    or when it deems necessary. You may opt out of receiving
                    this communication by dropping us an email on{" "}
                    <a
                      href="mailto:info@webguruz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mailto:info@webguruz.in
                    </a>
                  </p>
                </Accordian>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
